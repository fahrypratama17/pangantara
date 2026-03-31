import { destroySession } from "@/shared/repository/session-manager/action";

export async function logout() {
  await destroySession();
}
