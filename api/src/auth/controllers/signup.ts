import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../../models/user';

const signup = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error('Email in use');
    }

    const user = User.build({
        email,
        password
    });

    user.save();

    const userJwt = jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_KEY!);

    req.session = {
        jwt: userJwt
    };

    console.log(req.session);

    res.status(201).send(user);
};

export { signup };