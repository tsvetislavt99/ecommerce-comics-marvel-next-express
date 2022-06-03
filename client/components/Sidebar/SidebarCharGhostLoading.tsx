import React from 'react';

export default function SidebarCharGhostLoading() {
    return (
        <li className="flex text-white flex-row flex-nowrap m-2 mb-4 items-center w-full">
            <div className="h-16 w-16 animate-pulse bg-[#00DF9A] rounded-full" />
            <div className="ml-2 w-3/5">
                <h1 className="text-lg pb-6 bg-[#00DF9A] odd:animate-pulse mb-1 h-2"></h1>
                <p className="text-sm w-full h-4 bg-[#00DF9A] animate-pulse"></p>
                <p className="text-xs animate-pulse"></p>
                <div className="border-b border-1 border-b-gray-600 w-[100%]"></div>
            </div>
        </li>
    );
}
