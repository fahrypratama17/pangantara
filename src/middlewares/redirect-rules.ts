import { NextResponse } from "next/server";
import { ROUTE_REDIRECTS } from "@/proxy";
import type { ProxyFunction } from "@/shared/types/proxy";

export const redirectRules: ProxyFunction = async ({ req }) => {
  const pathname = req.nextUrl.pathname;
  const redirectTo = ROUTE_REDIRECTS[pathname as keyof typeof ROUTE_REDIRECTS];

  if (redirectTo) {
    return NextResponse.redirect(new URL(redirectTo, req.nextUrl));
  }
};
