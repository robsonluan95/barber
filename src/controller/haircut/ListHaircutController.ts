import { Request,Response } from "express";
import { ListHaircutService } from "../../services/haircut/listHaircutService";


export class ListHaircutController{
    async handle(request:Request,response:Response){
        const status= request.query.status as string
        const user_id = request.user_id 

        const listHaircutService = new ListHaircutService()

        const haircut =await  listHaircutService.execute({user_id,status})
        return response.json(haircut)
    }
}