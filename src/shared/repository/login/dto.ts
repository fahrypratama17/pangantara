import type { Roles } from "@/shared/lib/auth/role";

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginUser {
  user_id: string;
  name: string;
  email: string;
  address?: string;
  role: Roles;
}

export interface ILoginResponse {
  success: boolean;
  message: string;
  access_token: string;
  refresh_token: string;
  data: ILoginUser;
}
