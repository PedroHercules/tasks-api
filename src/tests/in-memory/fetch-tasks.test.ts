import { TasksRepositoryContract } from '@/application/repositories/contracts/tasks.repository'
import { TasksRepository } from '@/application/repositories/implementations/in-memory/tasks.repository'
import { TasksFilters } from '@/application/repositories/types/tasks'
import { createTask } from '@/helpers/tests/tasks/create-task'
import { describe, expect, it, afterEach } from 'vitest'

class FetchTasksByUserService {
	constructor(private tasksRepository: TasksRepositoryContract) {}

	async execute(userId: string, filters?: TasksFilters) {
		const tasks = await this.tasksRepository.fetch(userId, filters)

		return tasks
	}
}

const tasksRepository = TasksRepository.getInstance()

describe('Fetch tasks', () => {
	afterEach(async () => {
		tasksRepository.clearDb()
	})

	it('should return created task', async () => {
		const task = await createTask({
			title: 'task-1',
			description: 'task-1',
			status: 'pending',
			userId: 'user-test-1',
		})

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

	it('should be return tasks with status pending', async () => {
		const taskPending = await createTask({
			title: 'task-1',
			description: 'task-1',
			status: 'pending',
			userId: 'user-test-1',
		})

		await createTask({
			title: 'task-2',
			description: 'task-2',
			status: 'completed',
			userId: 'user-test-1',
		})

		await createTask({
			title: 'task-3',
			description: 'task-3',
			status: 'failed',
			userId: 'user-test-1',
		})

		const fetchTasksByUserService = new FetchTasksByUserService(tasksRepository)

		const tasks = await fetchTasksByUserService.execute('user-test-1', {
			status: 'pending',
		})

		expect(tasks).toHaveLength(1)
		expect(tasks).toEqual([
			expect.objectContaining({
				title: taskPending.title,
			}),
		])
	})

	it('should be return tasks with status completed', async () => {
		const taskCompletedOne = await createTask({
			title: 'task-1',
			description: 'task-1',
			status: 'completed',
			userId: 'user-test-1',
		})

		await createTask({
			title: 'task-2',
			description: 'task-2',
			status: 'pending',
			userId: 'user-test-1',
		})

		const taskCompletedTwo = await createTask({
			title: 'task-3',
			description: 'task-3',
			status: 'completed',
			userId: 'user-test-1',
		})

		const fetchTasksByUserService = new FetchTasksByUserService(tasksRepository)

		const tasks = await fetchTasksByUserService.execute('user-test-1', {
			status: 'completed',
		})

		expect(tasks).toHaveLength(2)
		expect(tasks).toEqual([
			expect.objectContaining({
				title: taskCompletedOne.title,
			}),
			expect.objectContaining({
				title: taskCompletedTwo.title,
			}),
		])
	})
})
