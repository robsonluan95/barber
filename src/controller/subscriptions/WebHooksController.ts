import {Request,Response} from 'express';
import Stripe from 'stripe';
import {stripe} from '../../utils/stripe'
import { saveSubscription } from '../../utils/manageSubscription ';

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
            
            case 'customer.subscription.deleted':
                //caso cliente cancele a sua assinatura 

                const payment = event.data.object as Stripe.Subscription;

                await saveSubscription(
                    payment.id,
                    payment.customer.toString(),
                    false,
                    true
                )

            break;
            case 'customer.subscription.updated':
                //caso ele precise atualizar 

                const paymentIntent = event.data.object as Stripe.Subscription;

                await saveSubscription(
                    paymentIntent.id,
                    paymentIntent.customer.toString(),
                    false,false
                )

            break;
            case 'checkout.session.completed':
                //caso ele finalize a compra
                const checkoutSession = event.data.object as Stripe.Checkout.Session;
                
                await saveSubscription(
                    checkoutSession.subscription.toString(),
                    checkoutSession.customer.toString(),
                    true,
                )


            break;
            default:
                console.log(`Unhandled event type ${event.type}`)
         }

         res.send()

    }
}

export {WebHooksController}