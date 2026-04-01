import { apiFetch } from "@/shared/lib/api/fetcher";
import { env } from "@/shared/lib/env";
import { TRegisterRequest } from "@/feature/auth/register/types/schema";
import { RegisterResponse } from "@/feature/auth/register/types/response";

export async function register(payload: TRegisterRequest) {
  const res = await apiFetch<RegisterResponse>({
    url: `${env.API_URL}/auth/register`,
    options: {
      method: "POST",
      body: JSON.stringify(payload),
    },
  });
  return res;
}
