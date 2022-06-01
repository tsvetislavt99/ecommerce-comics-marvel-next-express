import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon, SearchIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { SearchBar } from './SearchBar';

const navLinksGuest = [
    { title: 'Home', path: '/' },
    { title: 'Catalog', path: '/catalog' },
    { title: 'Login', path: '/login' },
    { title: 'Resgister', path: '/register' },
];

//Not implemented yet
const navLinksUser = [];

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [mobileSearch, setMobileSearch] = useState(false);
    const router = useRouter();

    const handleNav = () => {
        setNav((nav) => !nav);
        if (mobileSearch) {
            setMobileSearch((mobileSearch) => !mobileSearch);
        }
    };

    const handleMobileSearch = () => {
        setMobileSearch((mobileSearch) => !mobileSearch);
        if (nav) {
            setNav((nav) => !nav);
        }
    };

    return (
        <>
            <div
                className={
                    mobileSearch
                        ? 'flex sticky top-0 justify-between flex-nowrap items-center max-w-[1240px] mx-auto px-4 h-24 text-white'
                        : 'flex flex-nowrap justify-between items-center max-w-[1240px] mx-auto px-4 h-24 text-white'
                }
            >
                <h1 className="w-content text-3xl font-bold text-[#00df9a] uppercase">
                    <Link href="/">comics.</Link>
                </h1>
                <div className="hidden sm:block mx-auto w-full">
                    <SearchBar />
                </div>
                <ul className="sm:flex hidden">
                    {navLinksGuest.map((link) => (
                        <li key={link.path} className="p-4">
                            <Link href={link.path}>
                                <a
                                    className={
                                        router.pathname === link.path
                                            ? 'border-b-2 pb-1 border-[#00df9a]'
                                            : ''
                                    }
                                >
                                    {link.title}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                {
                    //Mobile nav
                }
                <div className="flex flex-row flex-nowrap sm:hidden">
                    <div
                        onClick={handleMobileSearch}
                        className="text-white block mr-2 sm:hidden"
                    >
                        {' '}
                        {mobileSearch ? (
                            <XIcon className="h-6 w-6" color="white" />
                        ) : (
                            <SearchIcon className="h-6 w-6" />
                        )}
                    </div>
                    <div onClick={handleNav} className="block sm:hidden">
                        {nav ? (
                            <XIcon className="h-6 w-6" color="white" />
                        ) : (
                            <MenuIcon className="h-6 w-6" color="white" />
                        )}
                    </div>
                </div>
                <div
                    className={
                        nav
                            ? 'sm:hidden fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500'
                            : 'fixed left-[-100%]  ease-out duration-1000'
                    }
                >
                    <h1 className="w-full text-3xl font-bold text-[#00df9a] mt-4 ml-4 uppercase">
                        comics.
                    </h1>
                    <ul className="pt-8 uppercase">
                        <li className="p-4 border-b border-b-gray-900">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="p-4 border-b border-b-gray-900">
                            <Link href="/catalog">Catalog</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {
                //Mobile search
            }
            <div
                className={
                    !mobileSearch
                        ? 'fixed top-[-100%] w-full basis-full items-center ease-out duration-1000 sm:hidden'
                        : 'fixed top-20 w-full basis-full items-center ease-in-out duration-500 sm:hidden'
                }
            >
                <SearchBar />
            </div>
        </>
    );
};
