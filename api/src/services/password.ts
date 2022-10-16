import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scriptAsync = promisify(scrypt);

export class Password {
    static async toHash(password: string) {
        const salt = randomBytes(8).toString('hex');
        
        const buffer = (await scriptAsync(password, salt, 64)) as Buffer;

        return `${buffer.toString('hex')}.${salt}`;
    }

    static async compare(storedPassword: string, suppliedPassword: string) {
        const [hashedPassword, salt] = storedPassword.split('.');
        const buffer = (await scriptAsync(suppliedPassword, salt, 64)) as Buffer;

        return buffer.toString('hex') === hashedPassword;
    }
}