import { UserModel } from '../db/users/models/users.model';
import { genPassword } from '../utils/passport.utils';

export const createUser = async (password: string, username: string) => {
    const { salt, hash } = genPassword(password);
    const newUser = new UserModel({
        username: username,
        hash: hash,
        salt: salt,
    });

    return await newUser.save();
};
