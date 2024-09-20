import { Request,Response } from "express"
import { AuthUserService } from "../../services/user/AuthUserService" 


class AuthUserController {
    async handle (request:Request,response:Response){
        const {email,password}= request.body
        const authUserController = new AuthUserService()

        const user = await authUserController.execute({email,password})
        return response.json(user)
    }
}

export {AuthUserController}