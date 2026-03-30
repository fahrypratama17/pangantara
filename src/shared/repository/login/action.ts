"use server";

import { getSession } from "@/shared/lib/auth/session";
import { loginSchema } from "@/shared/schema/auth.schema";
import { authQuery } from "./query";
import { ROLE_REDIRECT } from "@/shared/lib/auth/role";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const parsed = loginSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  let data;
  try {
    data = await authQuery.login(parsed.data);
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Login gagal",
    };
  }

  const session = await getSession();
  session.isLoggedIn = true;
  session.user = data.data;
  session.accessToken = data.access_token;
  session.refreshToken = data.refresh_token;
  await session.save();

  redirect(ROLE_REDIRECT[data.data.role]);
}
