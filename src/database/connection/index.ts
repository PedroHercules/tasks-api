import { pgDb } from './postgresql'

type Database = typeof pgDb

function initDatabase() {
	return pgDb
}

const database = initDatabase()

export { database }
