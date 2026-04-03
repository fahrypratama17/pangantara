"use server";

import { getIronSession, type IronSession } from "iron-session";
import { cookies } from "next/headers";
import {
  defaultSession,
  getSessionOptions,
  hasSessionSecret,
  Max_Age,
  SessionData,
} from "@/shared/lib/auth/session";
import { decodeToken, isTokenExpiringSoon } from "@/shared/lib/auth/decode";
import { requestTokenRefresh } from "@/shared/repository/session-manager/refresh-api";

const REFRESH_THRESHOLD_MS = 15 * 60 * 1000;

async function refreshAccessTokenIfNeeded(session: IronSession<SessionData>) {
  const accessToken = session.access_token;
  const refreshToken = session.refresh_token;

  if (!accessToken || !refreshToken) {
    return;
  }

  if (!isTokenExpiringSoon(accessToken, REFRESH_THRESHOLD_MS)) {
    return;
  }

  try {
    const refreshResult = await requestTokenRefresh(refreshToken);
    if (!refreshResult) {
      return;
    }

    if (refreshResult.status === 401) {
      session.destroy();
      return;
    }

    if (!refreshResult.ok) {
      return;
    }

    const payload = refreshResult.data;

    if (!payload?.success || !payload.access_token) {
      return;
    }

    session.access_token = payload.access_token;
    session.refresh_token = payload.refresh_token || refreshToken;
    session.isLoggedIn = true;
    session.expiresAt = Date.now() + Max_Age;
    await session.save();
  } catch {
    // Keep current session; request can still continue with existing token.
  }
}

async function _getSession() {
  const options = getSessionOptions();
  const session = await getIronSession<SessionData>(
    await cookies(),
    options,
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
  if (!hasSessionSecret()) {
    return JSON.parse(JSON.stringify(defaultSession));
  }

  const session = await _getSession();
  return JSON.parse(JSON.stringify(session));
}

export async function getSessionWithAutoRefresh(): Promise<
  IronSession<SessionData>
> {
  if (!hasSessionSecret()) {
    return JSON.parse(JSON.stringify(defaultSession));
  }

  const session = await _getSession();
  await refreshAccessTokenIfNeeded(session);
  return JSON.parse(JSON.stringify(session));
}

