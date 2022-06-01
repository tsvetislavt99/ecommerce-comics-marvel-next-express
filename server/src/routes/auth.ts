import { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { UserModel, UserType } from '../db/users/models/users.model';
import { isAuth } from '../middleware/authMiddleware';
import { createUser } from '../services/authService';
import { genPassword } from '../utils/passport.utils';

export const authRoutes = Router();

//Login
authRoutes.post(
    '/login',
    passport.authenticate('local'),
    (req: Request, res: Response) => {
        res.send({ message: 'Success!' });
    }
);

//Register
authRoutes.post(
    '/register',
    (req: Request, res: Response, next: NextFunction) => {
        try {
            const { password, username } = req.body;
            createUser(password, username);

            res.json({
                message: `Succeffully registered user: ${req.body.username}`,
            });
        } catch (error) {
            res.json({ message: 'Unexpected error! Please try again!' });
            return next(error);
        }
    }
);

//Logout
authRoutes.get('/logout', (req: Request, res: Response, next: NextFunction) => {
    // @ts-expect-error: Expected 0 args, but received 1 (Passport latest update broke this)
    req.logout((err: any) => {
        if (err) {
            return next(err);
        }
        res.send({ message: 'Success!' });
    });
});
