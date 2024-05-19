import { createTaskService } from '@/application/services/tasks/create-task'
import { fetchTasksByUserService } from '@/application/services/tasks/fetch-user-tasks'
import { execSync } from 'node:child_process'
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'

describe('Fetch user tasks in database', () => {
	it('should be return all user tasks', async () => {
		const createdTask = await createTaskService({
			title: 'Test',
			description: 'Task test',
			userId: 'user-2',
		})

		const tasks = await fetchTasksByUserService(createdTask.userId)

		expect(tasks).toHaveLength(1)
	})
})
