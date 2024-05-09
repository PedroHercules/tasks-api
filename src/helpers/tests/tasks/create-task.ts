import { TasksRepository } from '@/application/repositories/implementations/in-memory/tasks.repository'
import { CreateTaskService } from '@/application/services/tasks/create-task/create-task.service'

type Input = {
	title: string
	description: string
	status: 'completed' | 'pending' | 'in_progress' | 'failed'
	userId: string
}
export async function createTask(task: Input) {
	const tasksRepository = TasksRepository.getInstance()

	const createTaskService = new CreateTaskService(tasksRepository)

	const taskCreated = await createTaskService.execute(task)

	return taskCreated
}
