import {Response,Request} from "express";
import { NewScheduleService } from "../../services/schedule/NewScheduleService";



export class NewScheduleController{
    async handle(request:Request,response:Response){
        const {haircut_id,customer} = request.body
        const user_id = request.user_id
        const newScheduleService = new NewScheduleService()
        const schedule = await newScheduleService.execute({user_id,haircut_id,customer})
        return response.json(schedule)
    }
}