import { envClient, getClientEnv, type TClientEnv } from "@/shared/lib/env.client";

// Backward-compatible alias for modules that only need public env.
export const env = envClient;
export const getEnv = getClientEnv;
export type TEnv = TClientEnv;
