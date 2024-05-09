export type CreateTaskDTO = {
	title: string
	description: string
	userId: string
	status?: TaskStatus
}

export type TaskResponse = {
	id: string
	title: string
	description: string
	status: TaskStatus
	userId: string
	createdAt: Date
	updatedAt: Date
}

type TaskStatus = 'completed' | 'pending' | 'in_progress' | 'failed'
