import { TasksRepositoryContract } from '@/application/repositories/contracts/tasks.repository'
import {
	TaskOutput,
	TasksFilters,
} from '@/application/repositories/types/tasks'

export type FetchTasksByUserServiceType = (
	userId: string,
	filters?: TasksFilters,
) => Promise<TaskOutput[]>

export class FetchTasksByUserService {
	constructor(private tasksRepository: TasksRepositoryContract) {}

	async execute(userId: string, filters?: TasksFilters) {
		const tasks = await this.tasksRepository.fetch(userId, filters)

		return tasks
	}
}
