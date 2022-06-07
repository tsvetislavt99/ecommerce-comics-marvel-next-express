import mongoose, { Document } from 'mongoose';
import { Comic, ComicSchema } from '../../comics/models/comic.model';

export interface Cart {
    user: mongoose.Types.ObjectId;
    products: Comic[];
    price: number;
}

const CartSchema = new mongoose.Schema<Cart>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    products: {
        type: [ComicSchema],
        default: [],
    },
    price: {
        type: Number,
        default: function () {
            //TODO: Change
            return this.products.reduce((acc: number, curr: any) => {
                return (acc += curr.price);
            }, 0);
        },
    },
});

export const CartModel = mongoose.model<Cart>('Cart', CartSchema);
