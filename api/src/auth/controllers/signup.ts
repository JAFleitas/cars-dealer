import { Request, Response } from 'express';
import { User } from '../../models/user';

const signup = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if(existingUser) {
        throw new Error('Email in use');
    }

    const user = User.build({
        email,
        password
    });

    user.save();
    
    res.status(201).send(user);
};

export { signup };