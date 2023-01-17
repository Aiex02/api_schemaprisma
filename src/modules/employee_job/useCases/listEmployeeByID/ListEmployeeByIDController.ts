import { Request, Response } from "express";

import { ListEmployeeByIDUseCase } from "./ListEmployeeByIDUseCase";

export class ListEmployeeByIDController{
    async handle (request: Request, response: Response){
        const {id} = request.params
        const listEmployeeByIDUseCase = new ListEmployeeByIDUseCase()
        const employee = await listEmployeeByIDUseCase.execute(id)
        return response.json(employee)
    }
}
