import { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';
import {
    confirmCorrectUserGetReqs,
    confirmCorrectUserPostReqs,
} from '../middleware/authMiddleware';
import {
    addComicToCard,
    getCartByUserId,
    getCartItemsAmount,
    removeComicFromCart,
} from '../services/cartService';

export const cartRouter = Router();

//TODO: Add try catches and verify userId is same as authenitcated user
cartRouter.get(
    '/items-amount/:userId',
    passport.authenticate('jwt', { session: false }),
    confirmCorrectUserGetReqs,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const amount = await getCartItemsAmount(req.params.userId);
            res.send({ amount });
        } catch (error) {
            return next(error);
        }
    }
);

cartRouter.get(
    '/my-cart/:userId',
    passport.authenticate('jwt', { session: false }),
    confirmCorrectUserGetReqs,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const cart = await getCartByUserId(req.params.userId);
            res.send({ cart });
        } catch (error) {
            return next(error);
        }
    }
);

cartRouter.put(
    '/add-comic-to-cart',
    passport.authenticate('jwt', { session: false }),
    confirmCorrectUserPostReqs,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const cart = await addComicToCard(
                req.body.userId,
                req.body.comicId
            );

            res.send({ cart });
        } catch (error) {
            return next(error);
        }
    }
);

cartRouter.put(
    '/remove-comic-from-cart',
    passport.authenticate('jwt', { session: false }),
    confirmCorrectUserPostReqs,
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const cart = await removeComicFromCart(
                req.body.userId,
                req.body.comicId
            );

            res.send({ cart });
        } catch (error) {
            return next(error);
        }
    }
);
