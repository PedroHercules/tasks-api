import { TasksRepository } from '@/database/repositories/tasks.repository'
import { FetchTasksByUserService } from './fetch-user-tasks.service'

const tasksRepository = TasksRepository.getInstance()

const fetchTasksByUserServiceInstance = new FetchTasksByUserService(
	tasksRepository,
)

export const fetchTasksByUserService =
	fetchTasksByUserServiceInstance.execute.bind(fetchTasksByUserServiceInstance)
