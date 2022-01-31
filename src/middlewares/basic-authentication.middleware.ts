import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";

async function basicAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        
        const authorizationHeader = req.headers['authorization'];
    
        if (!authorizationHeader) {
            throw new ForbiddenError('Credenciais não informadas!');
        }

        const [authorizationType, token] = authorizationHeader.split(' ');

        // Aqui é preciso saber sobre o tipo 'basic' de autenticação
        if (authorizationType !== 'basic' || !token) {
            throw new ForbiddenError('Tipo de autenticação inválida!');
        }

        const tokenContent = Buffer.from(token, 'base64').toString('utf-8');
        const [username, password] = tokenContent.split(':');

        if (!username || !password) {
            throw new ForbiddenError('Credenciais não preenchidas!');
        }

        const user = await userRepository.findByUsernameAndPassword(username, password);

        if (!user) throw new ForbiddenError('Usuário e senha inválidos!');

        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}


export default basicAuthenticationMiddleware