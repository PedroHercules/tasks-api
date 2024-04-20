import { TaskInput, TaskOutput } from '../../types/tasks'

export interface TasksRepositoryContract {
	create(data: TaskInput): Promise<TaskOutput>
	fetch(): Promise<TaskOutput[]>
	getById(id: string): Promise<TaskOutput | null>
}
