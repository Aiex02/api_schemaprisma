import {prisma} from '../../../../database/prismaClient'

export class ListEmployeeUseCase {
    async execute() {
        const employee = await prisma.employee_job.findMany()
        return employee
    }
}