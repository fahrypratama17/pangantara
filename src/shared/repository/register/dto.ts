import type { Roles } from "@/shared/lib/auth/role";

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  role: Roles;
}

export interface IRegisterResponse {
  success: boolean;
  message: string;
  data: {
    user_id: string;
    name: string;
    email: string;
    role: Roles;
    created_at: string;
    updated_at: string;
  };
}
