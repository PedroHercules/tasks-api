import { app } from './app'

const PORT = 3334

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`Server listening on port ${PORT}`)
  })
