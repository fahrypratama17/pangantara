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

export function getTokenRemainingMs(token: string): number | null {
  try {
    const decoded = decodeToken(token);
    return decoded.exp * 1000 - Date.now();
  } catch {
    return null;
  }
}

export function isTokenExpiringSoon(
  token: string,
  thresholdMs: number,
): boolean {
  const remainingMs = getTokenRemainingMs(token);
  if (remainingMs === null) {
    return false;
  }

  return remainingMs <= thresholdMs;
}

