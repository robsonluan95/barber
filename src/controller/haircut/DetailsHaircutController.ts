import { Request,Response } from "express";
import { DetailsHaircutService } from "../../services/haircut/DetailsHaircutService";

export class DetailsHaircutController{
    async handle(request:Request,response:Response){  
        const haircut_id = request.query.haircut_id as string;

        const detailsHaircutService = new DetailsHaircutService()

        const details= await detailsHaircutService.execute({haircut_id})

        return response.json(details)
    }
}