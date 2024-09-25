import prismaClient from "../../prisma";

interface NewScheduleRequest{
    user_id:string;
    haircut_id:string;
    customer:string
}

export class NewScheduleService{
    async execute({user_id,haircut_id,customer}:NewScheduleRequest){

        console.log(user_id,haircut_id,customer)
        if(customer === ""||haircut_id === ""){
            throw new Error("Não foi possível fazer agendamento de serviço")
        }

        const schedule = await prismaClient.service.create({
            data:{
                user_id,
                haircut_id,
                customer

            }
        })
        return schedule
    }
}