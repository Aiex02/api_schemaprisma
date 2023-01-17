import { Router } from 'express'

import {CreateExamsController} from './modules/exams/useCases/createExams/CreateExamsController'
import {ListExamsController} from './modules/exams/useCases/listExams/ListExamsController'
import {ListExamsByIDController} from './modules/exams/useCases/listByID/ListExamsByIDController'

import {CreateEmployeeController} from './modules/employee_job/useCases/createEmployee/CreateEmployeeController'
import {ListEmployeeController} from './modules/employee_job/useCases/listEmployee/ListEmployeeController'
import {ListEmployeeByIDController} from './modules/employee_job/useCases/listEmployeeByID/ListEmployeeByIDController'

const routes = Router()

const createExamsController = new CreateExamsController()
const listExamsController = new ListExamsController() 
const listExamsByIDController = new ListExamsByIDController()

const createEmployeeController = new CreateEmployeeController()
const listEmployeeController = new ListEmployeeController() 
const listEmployeeByIDController = new ListEmployeeByIDController()

routes.post('/exams', createExamsController.handle)
routes.get('/exams', listExamsController.handle)
routes.get('/exams/:id', listExamsByIDController.handle)

routes.post('/jobs', createEmployeeController.handle)
routes.get('/jobs', listEmployeeController.handle)
routes.get('/jobs/:id', listEmployeeByIDController.handle)

export { routes }