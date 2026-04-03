import "server-only";

export type RefreshTokenResponse = {
  success?: boolean;
  message?: string;
  access_token?: string;
  refresh_token?: string;
};

type RefreshRequestResult = {
  status: number;
  ok: boolean;
  data: RefreshTokenResponse;
};

function normalizeRefreshResponse(raw: unknown): RefreshTokenResponse {
  if (!raw || typeof raw !== "object") {
    return {};
  }

  const source = raw as {
    payload?: RefreshTokenResponse;
    success?: boolean;
    message?: string;
    access_token?: string;
    refresh_token?: string;
  };

  if (source.payload && typeof source.payload === "object") {
    return source.payload;
  }

  return {
    success: source.success,
    message: source.message,
    access_token: source.access_token,
    refresh_token: source.refresh_token,
  };
}

function getApiBaseUrl() {
  return process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
}

export async function requestTokenRefresh(
  refreshToken: string,
): Promise<RefreshRequestResult | null> {
  const apiBaseUrl = getApiBaseUrl();
  if (!apiBaseUrl) {
    return null;
  }

  const response = await fetch(`${apiBaseUrl}/auth/refresh`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token: refreshToken }),
    cache: "no-store",
  });

  let data: RefreshTokenResponse = {};
  try {
    const raw = await response.json();
    data = normalizeRefreshResponse(raw);
  } catch {
    // Keep empty payload when response body is not valid JSON.
  }

  return {
    status: response.status,
    ok: response.ok,
    data,
  };
}

