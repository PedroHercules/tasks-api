import { PrismaClient } from 'prisma/postgresql/client'
import { pgDb } from './postgresql'
import { EnvSchema } from '@/shared/env'
import { Prisma } from '@prisma/client'

type Database = typeof pgDb

function initDatabase() {
	return pgDb
}

const database = initDatabase()

export { database }
