import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
	NODE_ENV: z
		.enum(['production', 'development', 'test'])
		.default('development'),
	PORT: z.coerce.number().default(3333),
	DATABASE_URL: z.string(),
	DATABASE_URL_TEST: z.string(),
	DB_PASSWORD: z.string().optional(),
	DB_USERNAME: z.string().optional(),
	DB_NAME: z.string().optional(),
	DB_AGENT: z.enum(['postgresql', 'sqlite']).default('postgresql'),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
	console.error('❌ Invalid environment variable: ', _env.error.format())
	throw new Error('Invalid environment variable.')
}

export const EnvSchema = _env.data
