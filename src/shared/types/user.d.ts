import { Roles } from "@/shared/lib/auth/role";

export type User = {
  user_id: string;
  name: string;
  email: string;
  role: keyof typeof Roles;
};
