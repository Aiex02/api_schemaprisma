import {prisma} from '../../../../database/prismaClient'

export class ListExamsUseCase {
    async execute() {
        const exams = await prisma.exams.findMany()
        return exams
    }
}