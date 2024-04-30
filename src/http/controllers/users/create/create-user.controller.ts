import { Request, Response } from 'express'

export class CreateUserController {
	async handle(request: Request, response: Response) {
		return response.status(201).json({
			user: {
				name: 'Json Doe',
				email: 'jhondoe@email.com',
			},
		})
	}
}
