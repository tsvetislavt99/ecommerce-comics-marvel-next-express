import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';

type Props = {
    children?: React.ReactNode;
};

export const NestedLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:w-5/6 2xl:w-3/4 mx-auto">
            <aside className="hidden lg:block sm:col-san-1">
                <Sidebar />
            </aside>
            <div className="grid col-span-3 lg:col-span-2 ">{children}</div>
        </div>
    );
};
