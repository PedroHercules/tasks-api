import { TaskInput, TaskOutput, TasksFilters } from '../types/tasks'

export interface TasksRepositoryContract {
	create(data: TaskInput): Promise<TaskOutput>
	fetch(userId: string, filters?: TasksFilters): Promise<TaskOutput[]>
	getById(id: string): Promise<TaskOutput | null>
}
