import { NextResponse } from "next/server";
import { Roles } from "@/shared/lib/auth/role";
import type { ProxyFunction } from "@/shared/types/proxy";

const ROUTE_ACCESS: Record<Roles, readonly string[]> = {
  [Roles.supplier]: [
    "/mitra/dashboard",
    "/mitra/customer-service",
    "/mitra/pesanan",
    "/mitra/produk",
  ],
  [Roles.admin]: [
    "/admin/dashboard",
    "/admin/manajemen",
    "/admin/monitoring",
    "/admin/verifikasi",
  ],
  [Roles.sppg]: [
    "/sppg/cari-supplier",
    "/sppg/hubungi",
    "/sppg/pembayaran-berhasil",
    "/sppg/detail-supplier",
  ],
} as const;

export const roleBasedAccess: ProxyFunction = async ({ req, session }) => {
  const { pathname } = req.nextUrl;
  const role = session?.user?.role as keyof typeof ROUTE_ACCESS;

  if (!role || !ROUTE_ACCESS[role]?.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
};
