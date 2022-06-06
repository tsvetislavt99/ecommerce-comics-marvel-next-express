import { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { UserType } from '../db/users/models/users.model';
import { createUser, loginUser } from '../services/authService';
import { issueJWT } from '../utils/helpers';

export const authRoutes = Router();

authRoutes.get(
    '/me',
    passport.authenticate('jwt', { session: false }),
    (req: Request, res: Response, next: NextFunction) => {
        res.json({ user: { username: req.user?.username, id: req.user?.id } });
    }
);

//Login
authRoutes.post('/login', async (req: Request, res: Response) => {
    const data = await loginUser(req.body.username, req.body.password);

    if (data.message) {
        res.status(409).json({ message: 'Invalid credentials!' });
    } else if (data.user && data.jwt) {
        res.json({
            message: 'Success!',
            user: { username: data.user.username, id: data.user.id },
            token: data.jwt.token,
            expiresIn: data.jwt.expires,
        });
    } else {
        //TODO: Improve error handling
        res.status(418);
    }
});

//Register
authRoutes.post(
    '/register',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { password, username } = req.body;
            const user: UserType = await createUser(password, username);

            const jwt = issueJWT(user);

            res.json({
                message: 'Success!',
                user: { username: user.username, id: user.id },
                token: jwt.token,
                expiresIn: jwt.expires,
            });
        } catch (error) {
            res.json({ message: 'Unexpected error! Please try again!' });
            return next(error);
        }
    }
);
