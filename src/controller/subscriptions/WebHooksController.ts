import {Request,Response} from 'express';
import Stripe from 'stripe';
import {stripe} from '../../utils/stripe'

class WebHooksController{
    async handle(req:Request,res:Response){
        //Aqui estamos recebendo a resposta enviada pelo Stripe -> 
        let event : Stripe.Event = req.body

        let endpointSecret : string = process.env.STRIPE_WEB_SECRET as string

        if (endpointSecret){
            const signature = req.headers['stripe-signature']
            try{

                //validando nossa assinatura 
                event = stripe.webhooks.constructEvent(
                    req.body,
                    signature,
                    endpointSecret
                )

            }catch(err){
                console.log("Webhook signature falid", err.message)
            }
        }


         switch(event.type){
            case 'customer.subscripion'
            case 'payment_intent.succeeded':
                console.log("Teste")
            case 'payment_method.attached':
                console.log("Teste")
            default:
                console.log(`Unhandled event type ${event.type}`)
         }

    }
}