/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Response, Request } from "express"
import { IPayload } from "../types/Payload.interface";
import * as jwt from "jsonwebtoken";
import { SECRET_WORD } from "../config/envs.config";

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const auth: string | undefined = req.headers["authorization"];
        if(!auth) throw 401;
        if(!auth.startsWith("Bearer ")) throw 403;
        const token: string | undefined = auth.split(" ")[1];
        if(!token) throw 403;
        const payload: IPayload | undefined = jwt.verify(token, SECRET_WORD) as IPayload;
        if(!payload) throw 406;
        (req as any)['access'] = {
            ...payload,
            exp: new Date(payload.exp * 1000),
            iat: new Date(payload.iat * 1000),
        }
        next();
    } catch (error) {
        throw error;
    }
    
}