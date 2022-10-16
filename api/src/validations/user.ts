import * as yup from 'yup';

const userSchema = yup.object({
    email: yup.string().required().email().trim(),
    password: yup.string().required().min(8).max(12)
});

export { userSchema };