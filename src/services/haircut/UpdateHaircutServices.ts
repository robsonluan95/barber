import prismaClient from "../../prisma";

interface HaircutRequest{
    user_id:string;
    haircut_id: string;
    name: string;
    price:number;
    status:boolean|string


}

export class UpdateHaircutServices{
    async execute({user_id,haircut_id,name,price,status = true}:HaircutRequest){


        try {
            const user = await prismaClient.user.findFirst({
                where:{
                    id:user_id
                },select:{
                    subscriptions:true
                }
            })
    
            if(user?.subscriptions?.status !== 'active'){
                throw new Error("Usuário não autorizado!")
            }
    
            const haircutUpdate = await prismaClient.haircut.update({
                where:{
                    id:haircut_id
                },data:{
                    name,
                    price,
                    status:status === true? true:false,
                }
            })

            return haircutUpdate
        } catch (error) {
            throw new Error(error)
        }   
    }
}