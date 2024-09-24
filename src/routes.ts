import { Router,Response,Request } from "express";

//- Import de Usuário-//
import { CreateUserController } from "./controller/user/CreateUserController";
import { AuthUserController } from "./controller/user/AuthUserController";
import { DetailsUserController } from "./controller/user/DetailsUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";

//- Import de Autenticação -//
import { isAuthenticated} from "./middlewares/isAuthenticated";

//- Rotas de Cortes -//
import { CreateHaircutController } from "./controller/haircut/CreateHaircutController";
import { ListHaircutController } from "./controller/haircut/ListHaircutController";
import { UpdateHaircutController } from "./controller/haircut/UpdateHaircutController";
import { CheckSubscriptionController } from "./services/CheckSubscription/CheckSubscriptionService";

const router = Router()



//- Rota Teste -//

router.get("/teste",(req:Request,res:Response)=>{
    return res.json({ok:true})
})

//--- ROTAS USER ---//
router.post('/users',new CreateUserController().handle)
router.post('/session',new AuthUserController().handle) 
router.get('/me',isAuthenticated,new DetailsUserController().handle) 
router.put('/meupdate',isAuthenticated,new UpdateUserController().handle) 


// -- ROTAS HAIRCUT --//
router.post('/haircut',isAuthenticated,new CreateHaircutController().handle) 
router.get('/haircut',isAuthenticated,new ListHaircutController().handle) 
router.put('/haircut',isAuthenticated,new UpdateHaircutController().handle) 
router.get('/haircut/check',isAuthenticated,new CheckSubscriptionController().handle) 


export {router}