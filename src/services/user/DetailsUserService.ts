import prismaClient from "../../prisma";

interface userRequest{
    id :string
}

export class DetailsUserService{
    async execute({id}:userRequest){
        const user = await prismaClient.user.findFirst(
            {
                where: {
                    id: id
                },
            }
        )
        return user
    }
}