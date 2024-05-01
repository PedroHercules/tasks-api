export type CreateTaskDTO = {
	title: string
	description: string
	userId: string
}

export type TaskResponse = {
	id: string
	title: string
	description: string
	userId: string
	createdAt: Date
	updatedAt: Date
}
