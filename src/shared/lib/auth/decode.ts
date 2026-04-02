import * as jose from "jose";
import type { Roles } from "@/shared/lib/auth/role";

interface User {
  user?: {
    user_id: string;
    name: string;
    email: string;
    address?: string;
    role: Roles;
  };
  access_token?: string;
  refresh_token?: string;
  isLoggedIn?: boolean;
  expiresAt?: number;
}

interface TokenPayload {
  sub: string;
  exp: number;
  user: User;
}

export function decodeToken(token: string): TokenPayload {
  return jose.decodeJwt(token);
}
