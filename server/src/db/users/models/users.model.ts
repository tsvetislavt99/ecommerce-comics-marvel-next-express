import { ObjectId } from 'bson';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    hash: String,
    salt: String,
});

export const UserModel = mongoose.model('Users', userSchema);

export type UserType = {
    id: ObjectId;
    username: string;
    hash: string;
    salt: string;
};

export type UserTypeSafe = {
    id: ObjectId;
    username: string;
};

//Not sure if this should be here
declare global {
    namespace Express {
        interface User {
            id: ObjectId;
            username: string;
        }
    }
}
