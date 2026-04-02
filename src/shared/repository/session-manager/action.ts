"use server";

import { getIronSession, type IronSession } from "iron-session";
import { cookies } from "next/headers";
import {
  defaultSession,
  Max_Age,
  SessionData,
  sessionOptions,
} from "@/shared/lib/auth/session";
import { decodeToken } from "@/shared/lib/auth/decode";

async function _getSession() {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions,
  );

  if (session.expiresAt && session.expiresAt < Date.now()) {
    session.destroy();
  }

  if (!session.isLoggedIn) {
    session.user = defaultSession.user;
    session.access_token = defaultSession.access_token;
    session.refresh_token = defaultSession.refresh_token;
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
}

type CreateSessionInput = {
  token: string;
  user?: SessionData["user"];
  refreshToken?: string;
  isLoggedIn?: boolean;
};

export async function createSession(input: string | CreateSessionInput) {
  const session = await _getSession();

  const token = typeof input === "string" ? input : input.token;
  const fallbackUser = typeof input === "string" ? undefined : input.user;
  const fallbackRefreshToken =
    typeof input === "string" ? undefined : input.refreshToken;
  const fallbackIsLoggedIn =
    typeof input === "string" ? undefined : input.isLoggedIn;

  let decodedUser: SessionData["user"] | undefined;
  let decodedRefreshToken: string | undefined;
  let decodedIsLoggedIn: boolean | undefined;

  try {
    const decoded = decodeToken(token);
    decodedUser = decoded.user?.user;
    decodedRefreshToken = decoded.user?.refresh_token;
    decodedIsLoggedIn = decoded.user?.isLoggedIn;
  } catch {
    // Some providers don't embed user claims in JWT; use explicit fallback payload.
  }

  session.access_token = token;
  session.user = fallbackUser ?? decodedUser;
  session.refresh_token = fallbackRefreshToken ?? decodedRefreshToken;
  session.isLoggedIn =
    fallbackIsLoggedIn ?? decodedIsLoggedIn ?? Boolean(session.access_token);
  session.expiresAt = Date.now() + Max_Age;

  await session.save();
}

export async function destroySession() {
  const session = await _getSession();
  session.destroy();
}

export async function getSession(): Promise<IronSession<SessionData>> {
  const session = await _getSession();
  return JSON.parse(JSON.stringify(session));
}
