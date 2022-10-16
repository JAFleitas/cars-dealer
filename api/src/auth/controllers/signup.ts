import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { BadRequestError } from '../../errors/badRequestError';
import { User } from '../../models/user';

const signup = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return next(new BadRequestError('Email in use'));
    }

    const user = User.build({
        email,
        password
    });

    await user.save();

    const userJwt = jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_KEY!);

    req.session = {
        jwt: userJwt
    };

    res.status(201).send(user);
};

export { signup };