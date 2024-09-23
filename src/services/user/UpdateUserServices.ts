import prismaClient from "../../prisma";

interface UserProps{
    user_id:string;
    name:string;
    endereco:string;
}

export class UpdatedUserServices{
    async execute({user_id,name,endereco}:UserProps){

        try {
            const userAlreadyExists = await prismaClient.user.findFirst({
                where:{
                    id:user_id
                }
            })
            if (!userAlreadyExists){
                throw new Error("Usuário não encontrado!")
            }
            const userUpdated = await prismaClient.user.update({
                where:{
                    id:user_id
                },
                data:{
                    name,
                    endereco,
                },
                select:{
                    name:true,
                    endereco:true,

                }
               
            })

            return userUpdated
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao atualizar usuário !")
        }
        
    }
}

