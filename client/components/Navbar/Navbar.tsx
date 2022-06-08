import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon, SearchIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { SearchBar } from './SearchBar';
import { UserContext } from 'contexts/UserContext';
import { CartContext } from 'contexts/CartContext';

const navLinksGuest = [
    { title: 'Home', path: '/' },
    { title: 'Catalog', path: '/catalog' },
    { title: 'Login', path: '/login' },
    { title: 'Register', path: '/register' },
];

const navLinksUser = [
    { title: 'Home', path: '/' },
    { title: 'Catalog', path: '/catalog' },
    { title: 'Profile', path: '/profile' },
    { title: 'Cart', path: '/cart' },
    { title: 'Logout', path: '/logout' },
];

//TODO: Extracts links in separate component
export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [mobileSearch, setMobileSearch] = useState(false);
    const router = useRouter();
    const user = useContext(UserContext);
    const { items } = useContext(CartContext);

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
                <div className="hidden lg:block mx-auto w-full">
                    <SearchBar />
                </div>

                <ul className="sm:flex items-center hidden">
                    <li className="hidden sm:block lg:hidden mt-2 mr-2">
                        <div
                            onClick={handleMobileSearch}
                            className="text-white block"
                        >
                            {mobileSearch ? (
                                <XIcon className="h-6 w-6" color="white" />
                            ) : (
                                <SearchIcon className="h-6 w-6" />
                            )}
                        </div>
                    </li>
                    {user.username
                        ? navLinksUser.map((link) => {
                              if (link.title === 'Cart') {
                                  return (
                                      <React.Fragment key={link.path}>
                                          <li
                                              key={link.path}
                                              className="p-4 relative"
                                          >
                                              <span className="absolute right-0 z-10 select-none bg-red-500 text-[10px] px-1 rounded-full">
                                                  {items}
                                              </span>

                                              <Link href={link.path}>
                                                  <a
                                                      className={
                                                          router.pathname ===
                                                          link.path
                                                              ? 'text-sm md:text-base border-b-2 pb-1 border-[#00df9a]'
                                                              : 'text-sm md:text-base'
                                                      }
                                                  >
                                                      {link.title}
                                                  </a>
                                              </Link>
                                          </li>
                                      </React.Fragment>
                                  );
                              } else {
                                  return (
                                      <li key={link.path} className="p-4">
                                          <Link href={link.path}>
                                              <a
                                                  className={
                                                      router.pathname ===
                                                      link.path
                                                          ? 'text-sm md:text-base border-b-2 pb-1 border-[#00df9a]'
                                                          : 'text-sm md:text-base'
                                                  }
                                              >
                                                  {link.title}
                                              </a>
                                          </Link>
                                      </li>
                                  );
                              }
                          })
                        : navLinksGuest.map((link) => (
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
                <div className="flex flex-row flex-nowrap sm:hidden ">
                    <div
                        onClick={handleMobileSearch}
                        className="text-white block mr-2 sm:hidden"
                    >
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
                            ? 'sm:hidden fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 z-50'
                            : 'fixed left-[-100%]  ease-out duration-1000 z-50'
                    }
                >
                    <h1 className="w-full text-3xl font-bold text-[#00df9a] mt-4 ml-4 uppercase">
                        comics.
                    </h1>
                    <ul className="pt-8 uppercase">
                        {user.username
                            ? navLinksUser.map((link) => {
                                  if (link.title === 'Cart') {
                                      return (
                                          <React.Fragment key={link.path}>
                                              <li
                                                  key={link.path}
                                                  className="p-4 border-b border-b-gray-900 relative"
                                              >
                                                  <span className="absolute left-14 z-10 select-none bg-red-500 text-[10px] px-1 rounded-full">
                                                      {items}
                                                  </span>

                                                  <Link href={link.path}>
                                                      <a
                                                          className={
                                                              router.pathname ===
                                                              link.path
                                                                  ? 'text-sm md:text-base border-b-2 pb-1 border-[#00df9a]'
                                                                  : 'text-sm md:text-base'
                                                          }
                                                      >
                                                          {link.title}
                                                      </a>
                                                  </Link>
                                              </li>
                                          </React.Fragment>
                                      );
                                  } else {
                                      return (
                                          <li
                                              key={link.path}
                                              className="p-4 border-b border-b-gray-900"
                                          >
                                              <Link href={link.path}>
                                                  <a
                                                      className={
                                                          router.pathname ===
                                                          link.path
                                                              ? 'text-sm md:text-base border-b-2 pb-1 border-[#00df9a]'
                                                              : 'text-sm md:text-base'
                                                      }
                                                  >
                                                      {link.title}
                                                  </a>
                                              </Link>
                                          </li>
                                      );
                                  }
                              })
                            : navLinksGuest.map((link) => (
                                  <li
                                      key={link.path}
                                      className="p-4 border-b border-b-gray-900"
                                  >
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
                </div>
            </div>
            {
                //Mobile search
            }
            <div
                className={
                    !mobileSearch
                        ? 'fixed top-[-100%] w-full basis-full items-center ease-out duration-1000 lg:hidden z-50'
                        : 'fixed top-20 w-full basis-full items-center ease-in-out duration-500 lg:hidden z-50'
                }
            >
                <SearchBar />
            </div>
        </>
    );
};
