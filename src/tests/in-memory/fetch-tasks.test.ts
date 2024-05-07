import { TasksRepositoryContract } from '@/application/repositories/contracts/tasks.repository'
import { TasksRepository } from '@/application/repositories/implementations/in-memory/tasks.repository'
import { createTask } from '@/helpers/tests/tasks/create-task'
import { describe, expect, it, afterEach } from 'vitest'

class FetchTasksByUserService {
	constructor(private tasksRepository: TasksRepositoryContract) {}

	async execute(userId: string) {
		const tasks = await this.tasksRepository.fetch(userId)

		return tasks
	}
}

const tasksRepository = TasksRepository.getInstance()

describe('Fetch tasks', () => {
	afterEach(async () => {
		tasksRepository.clearDb()
	})

	it('should return created tasks', async () => {
		const task = await createTask()

		const fetchTasksByUserService = new FetchTasksByUserService(tasksRepository)

		const tasks = await fetchTasksByUserService.execute('user-test-1')
		expect(tasks).toHaveLength(1)
		expect(tasks).toEqual([
			expect.objectContaining({
				title: task.title,
			}),
		])
	})

	it('should be return empty array', async () => {
		const fetchTasksByUserService = new FetchTasksByUserService(tasksRepository)

		const tasks = await fetchTasksByUserService.execute('user-test-1')
		console.log(tasks)
		expect(tasks).toHaveLength(0)
	})
})
