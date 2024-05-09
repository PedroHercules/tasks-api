export type TaskInput = {
	title: string
	description: string
	status?: TaskStatus
	userId: string
}

export type TaskOutput = {
	id: string
	title: string
	description: string
	status: TaskStatus
	userId: string
	createdAt: Date
	updatedAt: Date
}

export type TasksFilters = {
	order?: 'desc' | 'asc'
	status?: TaskStatus
	createdAt?: Date
	createdUntil?: Date
}

type TaskStatus = 'completed' | 'pending' | 'in_progress' | 'failed'
