import {prisma} from '../../../../database/prismaClient'

interface CreateExams{
    exam_code : string
    exam_name : string
}

export class CreateExamsUseCase {
    async execute({exam_code, exam_name}: CreateExams){
        const exam_codeExist = await prisma.exams.findFirst({
            where:{
                exam_code:{
                    equals: exam_code
                }
            }
        })
        if (exam_codeExist){
            throw new Error("Código de exame já cadastrado")
            return
        }
        const data = {
            exam_code,
            exam_name
        }

        const exams = await prisma.exams.create({ data })

        return exams
    }
}