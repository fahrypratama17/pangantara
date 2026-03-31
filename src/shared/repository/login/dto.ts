import type { Roles } from "@/shared/lib/auth/role";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  access_token: string;
  refresh_token: string;
  data: {
    user_id: string;
    name: string;
    email: string;
    role: Roles;
  };
}
