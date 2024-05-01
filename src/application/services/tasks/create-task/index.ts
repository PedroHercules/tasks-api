import { TasksRepository } from '@/database/repositories/tasks.repository'
import { CreateTaskService } from './create-task.service'

const tasksRepository = TasksRepository.getInstance()

const createTaskServiceInstance = new CreateTaskService(tasksRepository)

export const createTaskService = createTaskServiceInstance.execute.bind(
	createTaskServiceInstance,
)
