// Importamos 
import {Request,Response,NextFunction} from 'express';
// importamos para fazer a verificação 
import {verify} from 'jsonwebtoken';


//Criamos uma interface 
interface PlayLoad {
	sub:string;
}

//exportando uma função 
export function isAuthenticated(request:Request,response:Response,next:NextFunction){
		//estamos buscando caso tenhamos um token
		const authToken = request.headers.authorization;
		//verificando se ele está vazio 
		if(!authToken){
			return response.status(401).end();
		}
		
		//E como ele vem dividido em duas partes fazemos a separação , e descartamos o que esta
		//no primeiro 		
		const [,token]=authToken.split(" ")
		
		//
		try {
            //verificando se o token é válido e retorna o ID
			const {sub}= verify(token,process.env.JWT_SECRET) as PlayLoad;

            request.user_id = sub

			return next();
			
		}catch(err){
			return response.status(401).end();
		}
}
