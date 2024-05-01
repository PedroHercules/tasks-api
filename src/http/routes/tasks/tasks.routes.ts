import { createTaskController } from '@/http/controllers/tasks/create'
import { Router, response } from 'express'

export const tasksRouter = Router()

tasksRouter.post('/', (request, response) => {
	return createTaskController(request, response)
})
