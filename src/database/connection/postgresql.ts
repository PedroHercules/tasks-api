import { EnvSchema } from '@/shared/env'
import { PrismaClient } from 'prisma/postgresql/client'

export const pgDb = new PrismaClient({
	log: EnvSchema.NODE_ENV === 'development' ? ['error'] : ['error'],
})
