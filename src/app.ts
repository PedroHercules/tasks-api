import fastify from 'fastify'

export const app = fastify()

app.get('/', async (request, reply) => {
  return reply.send({
    name: 'tasks api',
    version: '1.0.0',
    description: 'A simple tasks api',
  })
})
