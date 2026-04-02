"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import type { TResetPasswordRequest } from "@/feature/auth/resetPassword/types/schema";
import { showResetPasswordToast } from "@/shared/component/toast";
import { resetPassword } from "@/shared/repository/reset-password/action";

const queryKey = {
  resetPassword: ["reset-password"],
};

export const useResetPasswordMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: queryKey.resetPassword,
    mutationFn: (data: TResetPasswordRequest) => resetPassword(data),
    onSuccess: (res) => {
      if (!res.success) {
        showResetPasswordToast("resetFailed", res.error || res.message);
        return;
      }

      showResetPasswordToast("resetSuccess");
      router.replace("/login");
    },
  });
};

