import React from 'react';
import { UserProvider } from 'contexts/UserContext';
import { Navbar } from '../Navbar/Navbar';
import { CartProvider } from 'contexts/CartContext';

type Props = {
    children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <UserProvider>
                <CartProvider>
                    <Navbar />
                    <main>{children}</main>
                </CartProvider>
            </UserProvider>
        </>
    );
};
