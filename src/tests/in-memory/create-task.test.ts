import { describe, expect, it } from 'vitest'

class CreateTaskUseCase {
  constructor() {}

  execute(data: any) {
    return {
      id: 'task1',
      ...data,
    }
  }
}

describe('Create Task', () => {
  it('should create a task', () => {
    const task = {
      title: 'Task 1',
      completed: false,
    }

    const createTaskUseCase = new CreateTaskUseCase()

    const taskCreated = createTaskUseCase.execute(task)

    expect(taskCreated.id).toEqual(expect.any(String))
  })
})
