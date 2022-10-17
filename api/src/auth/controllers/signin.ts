import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../../errors/badRequestError';
import { User } from '../../models/user';
import { Password } from '../../services/password';

const signin = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        return next(new BadRequestError('Invalid credentials'));
    }

    const passwordsMatch = await Password.compare(
        existingUser.password,
        password
    );

    if (!passwordsMatch) {
        return next(new BadRequestError('Invalid credentials'));
    }

    const userJwt = jwt.sign(
        {
            id: existingUser.id,
            email: existingUser.email
        }, process.env.JWT_KEY!
    );

    req.session = {
        jwt: userJwt
    }

    res.status(200).send(existingUser);
};

export { signin };