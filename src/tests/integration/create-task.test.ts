import { createTaskService } from '@/application/services/tasks/create-task'
import { execSync } from 'node:child_process'
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'

describe('Create task in database', () => {
	it('should be create task in database', async () => {
		const createdTask = await createTaskService({
			title: 'Test',
			description: 'Task test',
			userId: 'user-1',
		})

		expect(createdTask.id).toEqual(expect.any(String))
	})
})
