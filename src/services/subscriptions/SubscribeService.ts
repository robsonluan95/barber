import prismaClient from "../../prisma";

interface SubscribeRequest{
    user_id:string;
}

export class SubscribeService{
    async execute({user_id}:SubscribeRequest){
        return user_id
    }
}