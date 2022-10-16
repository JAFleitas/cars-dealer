import { Request, Response } from 'express';
import { User } from '../../models/user';
import { Password } from '../../services/password';

const signin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        throw new Error('Invalid credentials');
    }

    const passwordsMatch = await Password.compare(
        existingUser.password,
        password
    );

    if (!passwordsMatch) {
        throw new Error('Invalid credentials');
    }

    res.status(200).send(existingUser);
};

export { signin };