import {Request,Response} from "express";    
import { ListScheduleService } from "../../services/schedule/ListScheduleService";

export class ListScheduleController{
    async handle(request:Request,response:Response){
        const user_id = request.user_id

        const listScheduleService= new ListScheduleService()

        const list = await listScheduleService.execute({user_id})

        return response.json(list)
    }
}