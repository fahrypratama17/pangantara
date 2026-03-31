import type { Roles } from "@/shared/lib/auth/role";
import { env } from "@/shared/lib/env";
import type { SessionOptions } from "iron-session";

export const Max_Age: number = 60 * 60 * 24 * 1000;

export interface SessionData {
  user?: {
    user_id: string;
    name: string;
    email: string;
    role: Roles;
  };
  accessToken?: string;
  refreshToken?: string;
  isLoggedIn?: boolean;
  expiresAt?: number;
}

export const sessionOptions: SessionOptions = {
  password: env.SESSION_SECRET,
  cookieName: "pangantara-session",
  cookieOptions: {
    maxAge: Max_Age - 60 * 1000,
    secure: true,
  },
};

export const defaultSession: SessionData = { isLoggedIn: false };
