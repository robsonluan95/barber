import {Request, Response } from "express";
import { UpdatedUserServices } from "../../services/user/UpdateUserServices";

export class UpdateUserController{
    async handle(request:Request,response:Response){
        const {  name, endereco } = request.body;
        const user_id  = request.user_id;

        const updateUserService = new UpdatedUserServices()

        const userUpdate = await updateUserService.execute({user_id,name,endereco})

        return response.json(userUpdate)
    }
}