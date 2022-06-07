import React from 'react';

type Props = {
    children?: React.ReactNode;
};

export const ProfileLayout = ({ children }: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full sm:w-5/6 2xl:w-3/4 mx-auto">
            <aside className="hidden lg:block sm:col-san-1"></aside>
            <div className="grid col-span-3 lg:col-span-2 ">{children}</div>
        </div>
    );
};
