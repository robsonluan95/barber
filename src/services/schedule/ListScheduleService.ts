import prismaClient from "../../prisma";    

interface ListScheduleRequest{
    user_id:string
}

export class ListScheduleService{
    async execute({user_id}:ListScheduleRequest){

        const listSchedule =  await prismaClient.service.findMany({
            where:{
                user_id:user_id
            },
            select:{
                id:true,
                customer:true,
                haircut:true

            }

        })
        return listSchedule
    }
}