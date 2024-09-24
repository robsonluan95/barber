import {Request,Response} from 'express'
import { UpdateHaircutServices } from '../../services/haircut/UpdateHaircutServices'

export class UpdateHaircutController{
    async handle(request:Request,response:Response){
        const {haircut_id,name,price,status}=request.body
        const user_id= request.user_id

        const updateHaircutServices = new UpdateHaircutServices();

        const haircut =await updateHaircutServices.execute({haircut_id,name,price,user_id,status})

        return response.json(haircut)
    }
}