"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createSession } from "@/shared/repository/session-manager/action";
import { register } from "@/shared/repository/register/action";
import { getRegisterRedirectPath } from "@/shared/lib/role-redirect";
import type { TRegisterRequest } from "@/feature/auth/register/types/schema";
import { toast } from "sonner";

function extractAccessToken(data: unknown): string | null {
  if (!data || typeof data !== "object") {
    return null;
  }

  const tokenCandidates = [
    (data as { access_token?: unknown }).access_token,
    (data as { accessToken?: unknown }).accessToken,
    (data as { token?: unknown }).token,
  ];

  for (const candidate of tokenCandidates) {
    if (typeof candidate === "string" && candidate.trim().length > 0) {
      return candidate;
    }
  }

  return null;
}

function isLikelyJwt(token: string): boolean {
  return token.split(".").length === 3;
}

function extractRole(data: unknown): string | null {
  if (!data || typeof data !== "object") {
    return null;
  }

  const directRole = (data as { role?: unknown }).role;
  if (typeof directRole === "string" && directRole.trim().length > 0) {
    return directRole;
  }

  const nestedRole = (data as { user?: { role?: unknown } }).user?.role;
  if (typeof nestedRole === "string" && nestedRole.trim().length > 0) {
    return nestedRole;
  }

  return null;
}

const queryKey = {
  register: ["auth-session"],
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationKey: queryKey.register,
    mutationFn: (data: TRegisterRequest) => register(data),
    onSuccess: async (res) => {
      if (!res.success) {
        toast.error("Gagal register", {
          description: res.error || res.message,
        });
        return;
      }

      if (!res.data) {
        toast.error("Gagal register", {
          description: "Data respons register tidak valid",
        });
        return;
      }

      const token = extractAccessToken(res.data);
      const role = extractRole(res.data);

      if (!token || !isLikelyJwt(token)) {
        toast.success("Register berhasil", {
          description: "Akun berhasil dibuat. Silakan login untuk melanjutkan.",
        });
        router.push("/login");
        return;
      }

      try {
        await createSession(token);
        if (role) {
          router.push(getRegisterRedirectPath(role));
        } else {
          router.push("/login");
        }
        queryClient.refetchQueries({ queryKey: queryKey.register });
      } catch (error) {
        toast.error("Gagal register", {
          description:
            error instanceof Error
              ? error.message
              : "Gagal membuat session setelah register",
        });
      }
    },
    onError: (error) => {
      toast.error("Gagal register", {
        description:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat mengirim data register",
      });
    },
  });
};
