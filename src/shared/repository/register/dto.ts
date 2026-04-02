import type { Roles } from "@/shared/lib/auth/role";

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  role: Roles;
}

export interface IRegisterResponse {
  access_token: string;
  refresh_token?: string;
  user: {
    user_id: string;
    name: string;
    email: string;
    role: Roles;
    created_at: string;
    updated_at: string;
  };
}
