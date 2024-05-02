import { TaskInput, TaskOutput } from '../types/tasks'

export interface TasksRepositoryContract {
	create(data: TaskInput): Promise<TaskOutput>
	fetch(userId: string): Promise<TaskOutput[]>
	getById(id: string): Promise<TaskOutput | null>
}
