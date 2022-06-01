import passport from 'passport';
import localStrategy from 'passport-local';
import { UserModel, UserType } from '../db/users/models/users.model';

//TODO: Types
type PassportDoneCallback = (
    error: any,
    user?: any,
    options?: localStrategy.IVerifyOptions | undefined
) => void;

const customFields = {
    usernameField: 'uname',
    passwordField: 'pw',
};

const verifyCallback = (
    username: String,
    password: string,
    done: PassportDoneCallback
) => {
    UserModel.findOne({ username: username }, (err: any, user: UserType) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }
        if (!user.verifyPassword(password, user.hash, user.salt)) {
            return done(null, false);
        }
        return done(null, user);
    });
};

const strategy = new localStrategy.Strategy(verifyCallback);

passport.use(strategy);

//TODO: Add correct user type once more functionality is created
passport.serializeUser((user: Express.User, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId: string, done) => {
    UserModel.findById(userId, (err: any, user: UserType) => {
        if (err) {
            return done(err);
        }
        done(null, user);
    });
});
