export const ROLES = {
  ADMIN: "admin",
  SPPG: "sppg",
  MITRA: "mitra",
};

export const ROLE_REDIRECT: Record<Role, string> = {
  admin: "/admin/dashboard",
  sppg: "/",
  mitra: "/mitra/dashboard",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
