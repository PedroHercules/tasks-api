import { CreateTaskServiceContract } from '@/application/services/tasks/create-task/create-task.service'
import { Request, Response } from 'express'

export class CreateTaskController {
	constructor(private createTaskService: CreateTaskServiceContract) {}
	async handle(request: Request, response: Response) {
		const body = request.body

		const task = await this.createTaskService(body)

		return response.status(201).json(task)
	}
}
