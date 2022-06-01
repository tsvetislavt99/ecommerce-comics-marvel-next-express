import { ObjectId } from 'bson';
import mongoose from 'mongoose';
import crypto from 'crypto';

const userSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
});

userSchema.method(
    'verifyPassword',
    (password: string, hash: string, salt: string) => {
        const hashVerify = crypto
            .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
            .toString('hex');

        return hash === hashVerify;
    }
);

userSchema.method('genPassword', (password: string) => {
    const salt = crypto.randomBytes(32).toString('hex');
    const genHash = crypto
        .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
        .toString('hex');

    return {
        salt,
        hash: genHash,
    };
});

export const UserModel = mongoose.model('Users', userSchema);

export type UserType = {
    id: ObjectId;
    username: string;
    hash: string;
    salt: string;
    verifyPassword: (password: string, hash: string, salt: string) => boolean;
    genPassword: (password: string) => { salt: string; hash: string };
};

//Not sure if this should be here
declare global {
    namespace Express {
        interface User {
            id: ObjectId;
        }
    }
}
