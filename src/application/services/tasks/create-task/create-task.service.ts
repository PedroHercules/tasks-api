import { TasksRepositoryContract } from '@/application/repositories/contracts/tasks.repository'
import { CreateTaskDTO, TaskResponse } from '../types/task'

export type CreateTaskServiceContract = (
	data: CreateTaskDTO,
) => Promise<TaskResponse>

export class CreateTaskService {
	constructor(private tasksRepository: TasksRepositoryContract) {}

	async execute(data: CreateTaskDTO): Promise<TaskResponse> {
		const task = await this.tasksRepository.create(data)

		return task
	}
}
