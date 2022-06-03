import { UserModel, UserType } from '../db/users/models/users.model';
import { genPassword, issueJWT, validPassword } from '../utils/helpers';

export const createUser = async (password: string, username: string) => {
    const { salt, hash } = genPassword(password);
    const newUser = new UserModel({
        username: username,
        hash: hash,
        salt: salt,
    });

    return await newUser.save();
};

export const loginUser = async (username: string, password: string) => {
    const user: UserType | null = await UserModel.findOne({
        username: username,
    });
    if (!user) {
        return { message: 'No such user!' };
    }
    const isValid = validPassword(password, user.hash, user.salt);
    if (isValid) {
        const jwt = issueJWT(user);

        return { user, jwt };
    } else {
        return { message: 'Wrong credentials' };
    }
};
