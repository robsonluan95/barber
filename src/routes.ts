import { Router,Response,Request } from "express";

//- Import de Usuário-//
import { CreateUserController } from "./controller/user/CreateUserController";
import { AuthUserController } from "./controller/user/AuthUserController";
import { DetailsUserController } from "./controller/user/DetailsUserController";

//- Import de Autenticação -//
import { isAuthenticated} from "./middlewares/IsAuthenticated";

const router = Router()

//- Rota Teste -//

router.get("/teste",(req:Request,res:Response)=>{
    return res.json({ok:true})
})

//--- ROTAS USER ---//
router.post('/users',new CreateUserController().handle)
router.post('/session',new AuthUserController().handle) 
router.get('/me',isAuthenticated,new DetailsUserController().handle) 



export {router}