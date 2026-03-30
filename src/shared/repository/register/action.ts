"use server";

import { getSession } from "@/shared/lib/auth/session";
import { loginSchema, registerSchema } from "@/shared/schema/auth.schema";
import { authQuery } from "./query";
import { ROLE_REDIRECT } from "@/shared/lib/auth/role";
import { redirect } from "next/navigation";

type ActionResult =
  | { success: true; message?: string }
  | {
      success: false;
      message?: string;
      errors?: Record<string, string[] | undefined>;
    };

export async function loginAction(formData: FormData): Promise<ActionResult> {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const parsed = loginSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "Validasi login gagal",
    };
  }

  try {
    const data = await authQuery.login(parsed.data);

    const session = await getSession();
    session.isLoggedIn = true;
    session.user = {
      user_id: data.data.user_id,
      name: data.data.name,
      email: data.data.email,
      role: data.data.role,
    };
    session.accessToken = data.access_token;
    session.refreshToken = data.refresh_token;
    await session.save();

    redirect(ROLE_REDIRECT[data.data.role]);
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Login gagal",
    };
  }
}

export async function registerAction(
  formData: FormData,
): Promise<ActionResult> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
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

  try {
    await authQuery.register(parsed.data);
    return { success: true, message: "Register berhasil" };
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Register gagal",
    };
  }
}
