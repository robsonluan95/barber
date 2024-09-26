import prismaClient from "../../prisma";    

interface FinishScheduleRequest{
    id:string;
    user_id:string;
}

export class FinishScheduleService{
    async execute({id,user_id}:FinishScheduleRequest){

        if (id === ''|| user_id === '' ){
            throw new Error('Serviço não encontrado');
        }

        try{
            const belongsToUser = await prismaClient.service.findFirst({
                    where: {
                        id: id,
                        user_id:user_id
                    }
                }
            )

            if(!belongsToUser){
                throw new Error("Não autorizado")
            }

            await prismaClient.service.delete({
                where:{
                    id:id
                },
            })

            return {message :"Deletado com sucesso!"}
        }catch(err){
            throw new Error('Erro ao tentar finalizar o serviço');
        }

    }
}