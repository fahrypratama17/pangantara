import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/shared/lib/auth/session";
import { ROLE_REDIRECT } from "@/shared/lib/auth/role";

const PUBLIC_ROUTES = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
];

const PROTECTED_ROUTES: Record<string, string[]> = {
  "/admin": ["admin"],
  "/dashboard/supplier": ["supplier"],
  "/admin/mitra": ["sppg"],
};

export async function proxy(req: NextRequest) {
  const res = NextResponse.next();
  const { pathname } = req.nextUrl;

  const session = await getIronSession<SessionData>(req, res, sessionOptions);

  const isPublicRoute = PUBLIC_ROUTES.some((r) => pathname.startsWith(r));

  if (!session.isLoggedIn || !session.user) {
    if (!isPublicRoute) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return res;
  }

  if (isPublicRoute) {
    const redirectTo = ROLE_REDIRECT[session.user.role] ?? "/";
    return NextResponse.redirect(new URL(redirectTo, req.url));
  }

  const matchedRoute = Object.keys(PROTECTED_ROUTES).find((r) =>
    pathname.startsWith(r),
  );

  if (matchedRoute) {
    const allowedRoles = PROTECTED_ROUTES[matchedRoute];
    if (!allowedRoles.includes(session.user.role)) {
      const redirectTo = ROLE_REDIRECT[session.user.role] ?? "/dashboard";
      return NextResponse.redirect(new URL(redirectTo, req.url));
    }
  }

  return res;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ],
};
