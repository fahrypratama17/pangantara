"use server";

import { registerSchema } from "@/shared/schema/auth.schema";
import { authQuery } from "@/shared/repository/register/query";

type ActionResult =
  | { success: true; message?: string }
  | {
      success: false;
      message?: string;
      errors?: Record<string, string[] | undefined>;
    };

export async function registerAction(
  formData: FormData,
): Promise<ActionResult> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
    role: formData.get("role"),
  };

  const parsed = registerSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "Validasi register gagal",
    };
  }

  const { confirm_password, ...payload } = parsed.data;

  try {
    await authQuery.register(payload);
    return { success: true, message: "Register berhasil" };
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Register gagal",
    };
  }
}
