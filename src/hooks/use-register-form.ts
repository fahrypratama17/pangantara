"use client";

import { useMutation } from "@tanstack/react-query";
import { registerAction } from "@/shared/repository/register/action";

export function useRegister() {
  return useMutation({
    mutationKey: ["auth", "register"],
    mutationFn: async (formData: FormData) => {
      const result = await registerAction(formData);
      if (!result.success) {
        throw new Error(result.message ?? "Register gagal");
      }
      return result;
    },
  });
}
