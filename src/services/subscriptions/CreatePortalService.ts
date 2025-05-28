import prismaClient from '../../prisma'
import {stripe} from '../../utils/stripe'
import Stripe from 'stripe'

interface CreatePortalPropsRequest{
    user_id:string;
}

export class CreatePortalService{
    async execute({user_id}:CreatePortalPropsRequest){

        const findUser = await prismaClient.user.findFirst({
            where:{
                id:user_id
            }
        })

        let sessionId = findUser.stripe_customer_id;
        if(!sessionId){
            console.log('Não tem')
            return {message:'Usuario não tem dados '}
        }

        const portalSession = await stripe.billingPortal.sessions.create({
            customer:sessionId,
            return_url:process.env.STRIPE_SUCCESS_URL
        })
        return {sessionId:portalSession.url}

    }
}