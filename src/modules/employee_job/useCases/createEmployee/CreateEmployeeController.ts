import { Request, Response } from 'express'

import { CreateEmployeeUseCase } from './CreateEmployeeUseCase'

export class CreateEmployeeController {
    async handle( request: Request, response: Response) {

        const{ role_code, job_name} = request.body

        const createExamsUseCase = new CreateEmployeeUseCase();

        try{
            const result = await createExamsUseCase.execute({role_code, job_name})
            return response.json(result)
        } catch(error: any){
            console.log(error)
            return response.json({message: error.message})
        }
    } 
} 