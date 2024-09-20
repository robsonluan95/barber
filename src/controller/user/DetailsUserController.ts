import { Request,Response } from "express";
import { DetailsUserService } from "../../services/user/DetailsUserService";

export class DetailsUserController{
    async handle(request:Request,response:Response){
        const {id}=request.body
        const detailsUserController= new DetailsUserService()
        const userDetails = await detailsUserController.execute({id})
        return response.json(userDetails)
    }
}