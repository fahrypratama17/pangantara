import "server-only";
import { z } from "zod";

const envServerSchema = z.object({
  API_URL: z.string().min(1),
  SESSION_SECRET: z.string().min(32),
});

let cached: z.infer<typeof envServerSchema> | null = null;

export function getServerEnv() {
  if (!cached) {
    const parsed = envServerSchema.safeParse({
      API_URL: process.env.API_URL,
      SESSION_SECRET: process.env.SESSION_SECRET,
    });

    if (!parsed.success) {
      throw new Error(
        `Invalid server env: ${JSON.stringify(parsed.error.flatten().fieldErrors)}`,
      );
    }

    cached = parsed.data;
  }

  return cached;
}

export const envServer = getServerEnv();
export type TServerEnv = z.infer<typeof envServerSchema>;

