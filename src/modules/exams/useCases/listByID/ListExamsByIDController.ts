import { Request, Response } from "express";

import { ListExamsByIDUseCase } from "./ListExamsByIDUseCases";

export class ListExamsByIDController{
    async handle (request: Request, response: Response){
        const {id} = request.params
        const listExamsByIDUseCase = new ListExamsByIDUseCase()
        const exams = await listExamsByIDUseCase.execute(id)
        return response.json(exams)
    }
}
