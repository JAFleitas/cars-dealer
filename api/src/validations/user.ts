import { body } from 'express-validator';

const userValidation = [
    body('email', 'Enter a valid email please...')
        .isEmail()
        .notEmpty()
        .normalizeEmail()
        .escape(),
    body('password', 'Enter a valid password please...')
        .trim()
        .isLength({ min: 5, max: 16})
        .escape()
];

export { userValidation };