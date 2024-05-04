import { execSync } from 'node:child_process'
import dotenv from 'dotenv'
import { afterAll } from 'vitest'

dotenv.config({
	path: '.env.test',
})
