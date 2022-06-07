import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { useUser } from './UserContext';

const getFetcher = async (uri: string, token: string | undefined) => {
    try {
        const res = await fetch(uri, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();

        return await data;
    } catch (error) {}
};

const initialValue = {
    items: 0,
};

export const CartContext = createContext(initialValue);

type Props = {
    children: React.ReactNode;
};

export const CartProvider = ({ children }: Props) => {
    const { id } = useUser();
    const token = Cookies.get('CA_J7');
    if (token) {
        const { data, error } = useSWR(
            [`http://localhost:8089/cart/items-amount/${id}`, token],
            getFetcher
        );
        const [amount, setAmount] = useState(0);
        useEffect(() => {
            if (data) {
                console.log(data);
                setAmount(data.amount);
            }
        }, [data]);

        return (
            <CartContext.Provider value={{ items: amount }}>
                {children}
            </CartContext.Provider>
        );
    } else {
        return (
            <CartContext.Provider value={{ items: 0 }}>
                {children}
            </CartContext.Provider>
        );
    }
};

export const useCart = () => {
    const cartState = useContext(CartContext);

    return cartState;
};
