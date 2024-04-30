import swaggerAutogen from 'swagger-autogen'

const doc = {
	info: {
		version: '1.0.0',
		title: 'Tasks API',
		description: 'An api for task management.',
	},
	host: 'localhost:3334',
	schemes: ['http'],
	definitions: {
		apiStatus: {
			name: 'tasks api',
			version: '1.0.0',
			description: 'A simple tasks api',
		},
		createUser: {
			name: 'Jhon Doe',
			email: 'jhondoe@email.com',
			password: 'teste123',
		},
		user: {
			id: '<id>',
			name: 'Jhon Doe',
			email: 'jhondoe@email.com',
		},
	},
}

const outputFile = './swagger-output.json'
const routes = ['./src/app.ts', './src/http/routes/index.ts']

swaggerAutogen({ openapi: '3.1.0' })(outputFile, routes, doc)
