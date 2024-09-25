import prismaClient from "../../prisma";

interface HaircutRequest{
    haircut_id:string;
}

export class DetailsHaircutService{
    async execute({haircut_id}:HaircutRequest){
        const detailsHaircut = await prismaClient.haircut.findFirst({
            where:{
                id:haircut_id
            }
        })
        return detailsHaircut
    }
}