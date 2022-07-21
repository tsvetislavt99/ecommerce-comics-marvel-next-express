import Cookies from 'js-cookie';
import { getFetcher } from 'lib/fetchers';
import { createContext, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { useUser } from './UserContext';

const initialValue = {
    items: 0,
    cart: {
        products: [],
        shippingPrice: 0,
        price: 0,
    },
};

export const CartContext = createContext({
    ...initialValue,
    setCart: (cart: any) => {},
});

type Props = {
    children: React.ReactNode;
};

export const CartProvider = ({ children }: Props) => {
    const { id } = useUser();
    const token = Cookies.get('CA_J7');
    if (token) {
        const { data, error } = useSWR(
            [
                `https://e-commerce-back-end-marvel.herokuapp.com/cart/my-cart/${id}`,
                token,
            ],
            getFetcher
        );
        const [amount, setAmount] = useState(0);
        const [cart, setCart] = useState(initialValue.cart);
        useEffect(() => {
            if (data && data.cart) {
                setAmount(
                    data.cart.products.reduce(
                        (acc: number, curr: any) => (acc += curr.quantity),
                        0
                    )
                );
                setCart(data.cart);
            }
        }, [data]);

        const updateCart = (cart: any) => {
            setCart(cart);
            setAmount(
                cart.products.reduce(
                    (acc: number, curr: any) => (acc += curr.quantity),
                    0
                )
            );
        };

        return (
            <CartContext.Provider
                value={{ items: amount, cart, setCart: updateCart }}
            >
                {children}
            </CartContext.Provider>
        );
    } else {
        return (
            <CartContext.Provider
                value={{
                    items: 0,
                    cart: initialValue.cart,
                    setCart: (cart: any) => {},
                }}
            >
                {children}
            </CartContext.Provider>
        );
    }
};

export const useCart = () => {
    const cartState = useContext(CartContext);

    return cartState;
};
