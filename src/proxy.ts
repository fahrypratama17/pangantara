import { ProxyContext, ProxyFunction } from "@/shared/types/proxy";
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/shared/repository/session-manager/action";
import { authGuard } from "@/middlewares/auth-guard";
import { redirectRules } from "@/middlewares/redirect-rules";
import { roleBasedAccess } from "@/middlewares/role-access";

export const PROTECTED_ROUTES = ["/supplier", "/mitra", "/admin"];

export const ROUTE_REDIRECTS = {
  "/admin": "/admin/dashboard",
  "/mitra": "/mitra/dashboard",
  "/supplier": "/sppg/cari-supplier",
} as const;

export const config = {
  matcher: ["/sppg/:path*", "/mitra/:path*", "/admin/:path*"],
};

async function runProxy(
  req: NextRequest,
  proxies: ProxyFunction[],
): Promise<NextResponse> {
  const session = await getSession();
  const context: ProxyContext = { req, session };

  for (const proxy of proxies) {
    const result = await proxy(context);
    if (result) return result;
  }

  return NextResponse.next();
}

export async function proxy(req: NextRequest) {
  return runProxy(req, [authGuard, redirectRules, roleBasedAccess]);
}
