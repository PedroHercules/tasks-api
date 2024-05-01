import { createTaskService } from '@/application/services/tasks/create-task'
import { CreateTaskController } from './create-task.controller'

const createTaskControllerInstance = new CreateTaskController(createTaskService)

const createTaskController = createTaskControllerInstance.handle.bind(
	createTaskControllerInstance,
)

export { createTaskController }
