import {Request,Response} from "express";    
import { FinishScheduleService } from "../../services/schedule/FinishScheduleService";

export class FinishScheduleController{
    async handle(request:Request,response:Response){
        const id = request.query.id as string
        const user_id = request.user_id
        const finishScheduleService= new FinishScheduleService()

        const list =await finishScheduleService.execute({id,user_id})

        return response.json(list)
    }
}