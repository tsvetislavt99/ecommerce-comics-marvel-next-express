import crypto from 'crypto';

//TODO: Optimize
export const genPassword = (password: string) => {
    const salt = crypto.randomBytes(32).toString('hex');
    const genHash = crypto
        .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
        .toString('hex');

    return {
        salt,
        hash: genHash,
    };
};
