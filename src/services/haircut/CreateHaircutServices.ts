import prismaClient from "../../prisma";

interface createHairCut{
    user_id:string;
    name:string;
    price:number;
}

export class CreateHaircutServices{



    async execute({user_id,name,price}:createHairCut){
        console.log(user_id,name,price)

        if(!name||!price){
            throw new Error("Erro ao cadastrar, nome ou preço invalido ")
        }
        //Verificando quantos cortes o usuário tem
        const myHaircuts = await prismaClient.haircut.count({
            where:{
                user_id:user_id
            }}
        )

        const user = await prismaClient.user.findFirst({
            where:{
                id:user_id
            },
            include:{
                subscriptions:true
            }
        })

        // Criamos nossa validação e limite
        if(myHaircuts>=2 && user?.subscriptions?.status!=="active"){
            throw new Error("Você já tem 5 cortes, não pode criar mais")
        }

        const haircut = await prismaClient.haircut.create({
            data:{
                name,
                price,
                user_id
            }
        })
        return haircut
    }

}