import { database } from '@/database/connection'
import { TasksRepositoryContract } from '../../application/repositories/contracts/tasks.repository'
import {
	TaskInput,
	TaskOutput,
} from '../../application/repositories/types/tasks'

export class TasksRepository implements TasksRepositoryContract {
	private static instance: TasksRepository
	private constructor() {}

	public static getInstance(): TasksRepository {
		if (!TasksRepository.instance) {
			TasksRepository.instance = new TasksRepository()
		}
		return TasksRepository.instance
	}

	async create(data: TaskInput): Promise<TaskOutput> {
		return await database.tasks.create({
			data,
		})
	}

	async fetch(userId: string): Promise<TaskOutput[]> {
		return database.tasks.findMany({
			where: {
				userId,
			},
			orderBy: {
				createdAt: 'desc',
			},
		})
	}

	async getById(id: string): Promise<TaskOutput | null> {
		throw new Error('Not implemented')
	}
}
