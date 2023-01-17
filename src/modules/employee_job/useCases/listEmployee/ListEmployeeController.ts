import { Request, Response } from 'express'

import { ListEmployeeUseCase } from './ListEmployeeUseCase'

export class ListEmployeeController{
    async handle(request: Request, response: Response) {
        const listEmployeeUseCase = new ListEmployeeUseCase()
        try {
            const employee = await listEmployeeUseCase.execute()
            return response.json(employee)
        }catch (error: any) {
            console.log(error)
            response.json({message:error.message})
        }
    }
}