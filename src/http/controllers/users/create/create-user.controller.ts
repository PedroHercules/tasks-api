import { randomUUID } from 'crypto'
import { Request, Response } from 'express'

export class CreateUserController {
	async handle(request: Request, response: Response) {
		const body = request.body
		return response.status(201).json({
			user: {
				id: randomUUID(),
				...body,
			},
		})
	}
}
