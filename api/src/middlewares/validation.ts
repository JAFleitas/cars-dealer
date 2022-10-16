import { Request, Response, NextFunction } from "express";
import { InferType } from 'yup';

const validation = (schema: InferType<any>) => async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    try {
        await schema.validate(req.body);
        next();
    } catch (err) {
        res.status(400).json({ err });
    }
};

export { validation };