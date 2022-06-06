import React from 'react';
import { UserProvider } from 'contexts/UserContext';
import { Navbar } from '../Navbar/Navbar';

type Props = {
    children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <UserProvider>
                <Navbar />
                <main>{children}</main>
            </UserProvider>
        </>
    );
};
