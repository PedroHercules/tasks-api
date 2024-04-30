import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger-output.json'
import { router } from './http/routes'

export const app = express()

app.use(express.json())

app.use(router)

app.get('/', async (request, reply) => {
	/*
    #swagger.tags = ['Status']
    #swagger.description = "Return api status"
    #swagger.responses[200] = {
      description: "Success",
      content: {
          "application/json": {
              schema:{
                  $ref: "#/components/schemas/apiStatus"
              }
          }           
      }
    }
  */
	return reply.send({
		name: 'tasks api',
		version: '1.0.0',
		description: 'A simple tasks api',
	})
})

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
