import { Response,Request } from "express";
import { CreateHaircutServices } from "../../services/haircut/CreateHaircutServices";

export class CreateHaircutController{

    async handle(request:Request,response:Response){

        const {name,price} = request.body
        const user_id= request.user_id

        const createHaircutServices = new CreateHaircutServices()

        const haircut = await createHaircutServices.execute({user_id,name,price})

        return response.json(haircut)
    }
}