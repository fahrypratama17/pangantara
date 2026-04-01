import { notFound } from "next/navigation";
import { RolesMap } from "@/shared/lib/role-map";

export function getRoleRedirectPath(role: string): string {
  if (role === RolesMap.admin) {
    return "/admin/dashboard";
  }
  if (role === RolesMap.sppg) {
    return "/sppg/cari-supplier";
  }
  if (role === RolesMap.supplier) {
    return "/mitra/dashboard";
  }
  return notFound();
}
