import { Request, Response } from 'express'

import { CreateExamsUseCase } from './CreateExamsUseCase'

export class CreateExamsController {
    async handle( request: Request, response: Response) {

        const{ exam_code, exam_name} = request.body

        const createExamsUseCase = new CreateExamsUseCase();

        try{
            const result = await createExamsUseCase.execute({exam_code, exam_name})
            return response.json(result)
        } catch(error: any){
            console.log(error)
            return response.json({message: error.message})
        }
    } 
} 