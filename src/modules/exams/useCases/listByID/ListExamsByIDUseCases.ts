import { prisma } from '../../../../database/prismaClient'

export class ListExamsByIDUseCase{
    async execute(id:string){
        const exams = await prisma.exams.findMany({
            where: {
                id:id
            }
        })
        return exams
    }
}