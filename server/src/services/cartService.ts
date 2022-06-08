import { CartModel } from '../db/cart/models/cart.model';
import { ComicModel } from '../db/comics/models/comic.model';

//TODO: Refactor
export const addComicToCard = async (userId: string, comicId: string) => {
    const cart = await CartModel.findOne({ user: userId });
    if (!cart) {
        const newCart = new CartModel({
            user: userId,
            products: [{ comic: await ComicModel.findById(comicId) }],
        });

        return await newCart.save();
    } else {
        const comic = await ComicModel.findById(comicId);
        if (comic) {
            const alreadyIn = cart.products.some(
                (product) => product.comic.id === comicId
            );
            if (!alreadyIn) {
                cart.products.push({ comic, quantity: 1 });
            } else {
                cart.products = cart.products.map((product) => {
                    if (product.comic.id === comicId) {
                        product.quantity += 1;
                    }
                    return product;
                });
            }
            cart.price = cart.products.reduce((acc: number, curr: any) => {
                return (acc += curr.comic.price * curr.quantity);
            }, 0);
            cart.shippingPrice = cart.price > 50 ? 0 : 9.99;
        }
        cart.save();
        return cart;
    }
};

export const removeComicFromCart = async (userId: string, comicId: string) => {
    const comic = await ComicModel.findById(comicId);
    const cart = await CartModel.findOneAndUpdate(
        { user: userId },
        { $pull: { products: comic } }
    );
    if (cart) {
        cart.price = cart.products.reduce((acc: number, curr: any) => {
            return (acc += curr.price);
        }, 0);
        cart.shippingPrice = cart.price > 50 ? 0 : 9.99;
    }
    return await cart?.save();
};

export const getCartByUserId = async (userId: string) => {
    const cart = await CartModel.findOne({ user: userId });

    return cart;
};

export const getCartItemsAmount = async (userId: string) => {
    const cart = await CartModel.findOne({ user: userId });
    return cart?.products.length;
};
