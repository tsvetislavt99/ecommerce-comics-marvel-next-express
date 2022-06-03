import passport from 'passport';
import localStrategy from 'passport-local';
import { UserModel, UserType } from '../db/users/models/users.model';
import jwtStrategy from 'passport-jwt';
import path from 'path';
import fs from 'fs';

type PassportDoneCallback = (
    error: any,
    user?: any,
    options?: localStrategy.IVerifyOptions | undefined
) => void;

//*************************JWT - Start************************** */
const pathToKey = path.join(__dirname, '../../', 'id_rsa_pub.pem');

const PUB_KEY = fs.readFileSync(pathToKey, 'utf-8');

const options = {
    jwtFromRequest: jwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256'],
};

const verifyJwtCallback = (payload: any, done: PassportDoneCallback) => {
    UserModel.findOne({ _id: payload.sub }, (err: any, user: UserType) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    });
};

const JWTStrategy = new jwtStrategy.Strategy(options, verifyJwtCallback);

passport.use(JWTStrategy);
