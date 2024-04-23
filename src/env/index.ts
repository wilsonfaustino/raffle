import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("production"),
  SHEET_ID: z.string().min(1),
  SHEET_NAME: z.string().min(1),
});

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('⚠️ Invalid environment variables.', _env.error.format())
  throw new Error(`Invalid environment variables.`)
}

export const env = _env.data
