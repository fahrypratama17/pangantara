import type { Roles } from "@/shared/lib/auth/role";
import { envServer } from "@/shared/lib/env.server";
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

export const sessionOptions: SessionOptions = {
  password: envServer.SESSION_SECRET,
  cookieName: "pangantara-session",
  cookieOptions: {
    maxAge: Max_Age - 60 * 1000,
    secure: process.env.NODE_ENV === "production",
  },
};

export const defaultSession: SessionData = { isLoggedIn: false };
