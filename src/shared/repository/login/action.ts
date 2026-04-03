import { destroySession } from "@/shared/repository/session-manager/action";
import { TLoginRequest } from "@/feature/auth/login/types/schema";
import { apiFetch } from "@/shared/lib/api/fetcher";
import { LoginResponse } from "@/feature/auth/login/types/response";

const API_URL = "https://be-internship.bccdev.id/hanif/api/v1";

export async function login(payload: TLoginRequest) {
  return apiFetch<LoginResponse>({
    url: `${API_URL}/auth/login`,
    options: { method: "POST", body: JSON.stringify(payload) },
  });
}

export async function logout() {
  await destroySession();
}
