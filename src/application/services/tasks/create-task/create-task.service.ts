import { TasksRepositoryContract } from '@/application/repositories/contracts/tasks.repository'
import { CreateTaskDTO, TaskResponse } from '../../../dtos/tasks/task'

export type CreateTaskServiceType = (
	data: CreateTaskDTO,
) => Promise<TaskResponse>

export class CreateTaskService {
	constructor(private tasksRepository: TasksRepositoryContract) {}

	async execute(data: CreateTaskDTO): Promise<TaskResponse> {
		const task = await this.tasksRepository.create(data)

		return task
	}
}
