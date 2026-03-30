"use client";

import { useMutation } from "@tanstack/react-query";
import { loginAction } from "@/shared/repository/login/action";

export function useLogin() {
  return useMutation({
    mutationKey: ["auth", "login"],

    mutationFn: async (formData: FormData) => {
      const result = await loginAction(formData);

      if (result && !result.success) {
        throw new Error(result.message ?? "Login gagal");
      }

      return result;
    },

    onError: (error) => {
      console.log("LOGIN ERROR:", error); // 🔥 di sini
    },
  });
}
