import { Router,Response,Request } from "express";

const router = Router()

router.get("/teste",(req:Request,res:Response)=>{
    //throw new Error("Teste aqui")
    return res.json({ok:true})
})

export {router}