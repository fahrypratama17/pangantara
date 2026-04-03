import type { Roles } from "@/shared/lib/auth/role";
import type { SessionOptions } from "iron-session";

export const Max_Age: number = 60 * 60 * 24 * 1000;

export interface SessionData {
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

export function hasSessionSecret() {
  return Boolean(process.env.SESSION_SECRET?.trim());
}

export function getSessionOptions(): SessionOptions {
  const secret = process.env.SESSION_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error(
      "SESSION_SECRET belum diset atau kurang dari 32 karakter",
    );
  }

  return {
    password: secret,
    cookieName: "pangantara-session",
    cookieOptions: {
      maxAge: Max_Age - 60 * 1000,
      secure: process.env.NODE_ENV === "production",
    },
  };
}

export const defaultSession: SessionData = { isLoggedIn: false };
