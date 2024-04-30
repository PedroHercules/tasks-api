import { createUserController } from '@/http/controllers/users/create/make-create-user-controller.factory'
import { Router } from 'express'

export const usersRouter = Router()

usersRouter.post('/register', (request, response) => {
	/*
			#swagger.tags = ['Users']
			#swagger.description = "Create user account."
			#swagger.requestBody = {
					required: true,
					content: {
							"application/json": {
									schema: {
											$ref: "#/components/schemas/createUser"
									}  
							}
					}
			} 
			#swagger.responses[201] = {
				description: "Success",
				content: {
						"application/json": {
								schema:{
										$ref: "#/components/schemas/user"
								}
						}           
				}
			}
		*/
	return createUserController(request, response)
})
