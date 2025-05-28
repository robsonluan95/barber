import {Request, Response} from 'express'
import {CreatePortalService} from '../../services/subscriptions/CreatePortalService'

export class CreatePortalController{
    async handle(request:Request,response:Response){
        const user_id = request.user_id

    
        const createPortalController = new CreatePortalService()

       const portal = await createPortalController.execute({user_id})

       return response.json(portal)

    }
}