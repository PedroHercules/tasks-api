import { Router } from 'express'
import { usersRouter } from './users/users.routes'
import { tasksRouter } from './tasks/tasks.routes'

export const router = Router()

router.use('/users', usersRouter)
router.use('/tasks', tasksRouter)
