import prismaClient from "../../prisma";
import Stripe from "stripe";


interface SubscribeRequest{
    user_id:string;
}

class SubscribeService{
    async execute({user_id}:SubscribeRequest){
        const stripe = new Stripe(
            process.env.STRIPE_API_KEY,
            {
                apiVersion: "2025-04-30.basil",
                appInfo:{
                    name:'robsonluan.dev',
                    version:'1',
                }
            }
        )

        //Buscar o usuario e cadastrar ele no stripe caso não tenha

        const findUser = await prismaClient.user.findFirst({
            where:{
                id:user_id
            }
        })

        let customerID = findUser?.stripe_customer_id;
        
        if(!customerID){
            //Caso o usuario não tenha o customerID, vamos criar um
            const stripeCustomer = await stripe.customers.create({
                email:findUser.email
            })


        }
    }
}

export {SubscribeService}