import { Request,Response } from "express";
import { DetailsUserService } from "../../services/user/DetailsUserService";

export class DetailsUserController{
    async handle(request:Request,response:Response){
        const user_id=request.user_id
        const detailsUserController= new DetailsUserService()
        const userDetails = await detailsUserController.execute(user_id)
        return response.json(userDetails)
    }
}