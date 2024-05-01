import { TasksRepositoryContract } from '@/application/repositories/contracts/tasks.repository'
import { TasksRepository } from '@/application/repositories/implementations/in-memory/tasks.repository'
import { describe, expect, it } from 'vitest'

class CreateTaskUseCase {
	constructor(private tasksRepository: TasksRepositoryContract) {}

	async execute(data: any) {
		const task = await this.tasksRepository.create(data)
		return task
	}
}

describe('Create Task', () => {
	it('should create a task', async () => {
		const task = {
			title: 'Task 1',
			completed: false,
		}

		const tasksRepository = TasksRepository.getInstance()

		const createTaskUseCase = new CreateTaskUseCase(tasksRepository)

		const taskCreated = await createTaskUseCase.execute(task)

		expect(taskCreated.id).toEqual(expect.any(String))
	})
})
