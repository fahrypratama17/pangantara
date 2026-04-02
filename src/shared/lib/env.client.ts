import { z } from "zod";

const envClientSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().min(1),
});

let cached: z.infer<typeof envClientSchema> | null = null;

export function getClientEnv() {
  if (!cached) {
    const parsed = envClientSchema.safeParse({
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    });

    if (!parsed.success) {
      throw new Error(
        `Invalid public env: ${JSON.stringify(parsed.error.flatten().fieldErrors)}`,
      );
    }

    cached = parsed.data;
  }

  return cached;
}

// Lazy access prevents import-time throws during build phases that don't use env directly.
export const envClient = new Proxy({} as z.infer<typeof envClientSchema>, {
  get(_target, prop) {
    return getClientEnv()[prop as keyof z.infer<typeof envClientSchema>];
  },
});
export type TClientEnv = z.infer<typeof envClientSchema>;

