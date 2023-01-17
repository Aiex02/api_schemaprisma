import {prisma} from '../../../../database/prismaClient'

interface CreateEmployee{
    role_code : string
    job_name : string
}

export class CreateEmployeeUseCase {
    async execute({role_code, job_name}: CreateEmployee){
        const role_codeExist = await prisma.employee_job.findFirst({
            where:{
                role_code:{
                    equals: role_code
                }
            }
        })
        if (role_codeExist){
            throw new Error("Código de exame já cadastrado")
            return
        }
        const data = {
            role_code,
            job_name
        }

        const exams = await prisma.employee_job.create({data})

        return exams
    }
}