import { apiFetch } from "@/shared/lib/api/fetcher";
import { envClient } from "@/shared/lib/env.client";
import { TRegisterRequest } from "@/feature/auth/register/types/schema";
import { RegisterResponse } from "@/feature/auth/register/types/response";

export async function register(payload: TRegisterRequest) {
  const res = await apiFetch<RegisterResponse>({
    url: `${envClient.NEXT_PUBLIC_API_URL}/auth/register`,
    options: {
      method: "POST",
      body: JSON.stringify(payload),
    },
  });
  return res;
}
