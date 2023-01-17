import { Request, Response } from 'express'

import { ListExamsUseCase } from './ListExamsUseCase'

export class ListExamsController{
    async handle(request: Request, response: Response) {
        const listExamsUseCase = new ListExamsUseCase()
        try {
            const exams = await listExamsUseCase.execute()
            return response.json(exams)
        }catch (error: any) {
            console.log(error)
            response.json({message:error.message})
        }
    }
}