import { randomUUID } from 'crypto'
import { TasksRepositoryContract } from '../contracts/tasks/tasks.repository'
import { TaskInput, TaskOutput } from '../types/tasks'

export class TasksRepository implements TasksRepositoryContract {
	private static instance: TasksRepository
	private _database: TaskOutput[] = []

	private constructor() {}

	public static getInstance(): TasksRepository {
		if (!TasksRepository.instance) {
			TasksRepository.instance = new TasksRepository()
		}

		return TasksRepository.instance
	}

	public async create(data: TaskInput): Promise<TaskOutput> {
		const input = {
			id: randomUUID(),
			createdAt: new Date(),
			updatedAt: new Date(),
			...data,
		}

		this._database.push(input)

		return input
	}

	fetch(): Promise<TaskOutput[]> {
		throw new Error('Not implemented')
	}

	getById(id: string): Promise<TaskOutput | null> {
		throw new Error('Not implemented')
	}
}
