export type TaskInput = {
	title: string
	description: string
	userId: string
}

export type TaskOutput = {
	id: string
	title: string
	description: string
	userId: string
	createdAt: Date
	updatedAt: Date
}
