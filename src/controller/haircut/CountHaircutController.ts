import {Request,Response} from 'express';
import { CountHaircutService } from '../../services/haircut/CountHaircutService';


export class CountHaircutController{
    async handle(request:Request,response:Response){
        const user_id= request.user_id

        const countHaircutService = new CountHaircutService()

        const count = await countHaircutService.execute({user_id})

        return response.json(count)
    }
}