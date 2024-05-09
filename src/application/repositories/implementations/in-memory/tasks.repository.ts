import { randomUUID } from 'crypto'
import { TasksRepositoryContract } from '../../contracts/tasks.repository'
import { TaskInput, TaskOutput, TasksFilters } from '../../types/tasks'

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

	public clearDb() {
		this._database = []
	}

	public async create(data: TaskInput): Promise<TaskOutput> {
		const input = {
			...data,
			id: randomUUID(),
			createdAt: new Date(),
			updatedAt: new Date(),
			status: data.status,
		}

		this._database.push({
			...input,
			status: data.status || 'pending',
		})

		return input as TaskOutput
	}

	async fetch(userId: string, filters?: TasksFilters): Promise<TaskOutput[]> {
		let tasks = this._database.filter((task) => task.userId === userId)

		if (filters?.createdAt) {
			tasks = tasks.filter((task) => filters?.createdAt! >= task.createdAt)
		}

		if (filters?.createdUntil) {
			tasks = tasks.filter((task) => filters?.createdUntil! <= task.createdAt)
		}

		if (filters?.order === 'desc') {
			tasks = tasks.sort(
				(a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
			)
		}

		if (filters?.order === 'asc') {
			tasks = tasks.sort(
				(a, b) => b.createdAt.getTime() + a.createdAt.getTime(),
			)
		}

		if (filters?.status) {
			tasks = tasks.filter((task) => task.status === filters.status)
		}

		return tasks
	}

	getById(id: string): Promise<TaskOutput | null> {
		throw new Error('Not implemented')
	}
}
