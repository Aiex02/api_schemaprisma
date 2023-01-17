import { prisma } from '../../../../database/prismaClient'

export class ListEmployeeByIDUseCase{
    async execute(id:string){
        const employee = await prisma.employee_job.findMany({
            where: {
                id:id
            }
        })
        return employee
    }
}