import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Masukkan email Anda!")
    .refine(
      (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      {
        message: "Tolong masukkan email Anda!",
      },
    ),
  password: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .max(50, "Password maksimal 8 karakter"),
});

export type TLoginRequest = z.infer<typeof loginSchema>;
