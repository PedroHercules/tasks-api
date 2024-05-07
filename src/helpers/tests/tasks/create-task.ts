import { TasksRepository } from '@/application/repositories/implementations/in-memory/tasks.repository'
import { CreateTaskService } from '@/application/services/tasks/create-task/create-task.service'

export async function createTask() {
	const task = {
		title: 'Task 1',
		description: 'teste',
		userId: 'user-test-1',
	}

	const tasksRepository = TasksRepository.getInstance()

	const createTaskService = new CreateTaskService(tasksRepository)

	const taskCreated = await createTaskService.execute(task)

	return taskCreated
}
