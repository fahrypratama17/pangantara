import { destroySession } from "@/shared/repository/session-manager/action";
import { TLoginRequest } from "@/feature/auth/login/types/schema";
import { apiFetch } from "@/shared/lib/api/fetcher";
import { LoginResponse } from "@/feature/auth/login/types/response";
import { envClient } from "@/shared/lib/env.client";

export async function login(payload: TLoginRequest) {
  const res = await apiFetch<LoginResponse>({
    url: `${envClient.NEXT_PUBLIC_API_URL}/auth/login`,
    options: { method: "POST", body: JSON.stringify(payload) },
  });
  return res;
}

export async function logout() {
  await destroySession();
}
