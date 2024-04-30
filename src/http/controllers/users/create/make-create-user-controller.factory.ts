import { CreateUserController } from './create-user.controller'

const createUserControllerInstance = new CreateUserController()

const createUserController = createUserControllerInstance.handle.bind(
	createUserControllerInstance,
)

export { createUserController }
