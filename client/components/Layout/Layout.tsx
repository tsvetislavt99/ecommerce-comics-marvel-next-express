import React from 'react';
import { Navbar } from '../Navbar/Navbar';

type Props = {
    children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
};
