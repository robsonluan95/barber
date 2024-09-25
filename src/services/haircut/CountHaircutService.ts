import prismaClient from "../../prisma";

interface CountHaircutRequest{
    user_id;
}


export class CountHaircutService{
    async execute({user_id}:CountHaircutRequest){
        const countHair = await prismaClient.haircut.count({
            where:{
                user_id:user_id
            }
        })

        return countHair
    }
}