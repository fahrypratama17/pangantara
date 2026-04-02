import type { TResetPasswordRequest } from "@/feature/auth/resetPassword/types/schema";
import type { ResetPasswordResponse } from "@/feature/auth/resetPassword/types/response";
import { apiFetch } from "@/shared/lib/api/fetcher";
import { envClient } from "@/shared/lib/env.client";

export async function resetPassword(payload: TResetPasswordRequest) {
  const res = await apiFetch<ResetPasswordResponse>({
	url: `${envClient.NEXT_PUBLIC_API_URL}/auth/reset-password`,
	options: {
	  method: "POST",
	  body: JSON.stringify(payload),
	},
	errorMessage: "Gagal mereset password",
	successMessage: "Berhasil mereset password",
  });

  return res;
}

