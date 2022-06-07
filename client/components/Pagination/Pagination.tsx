import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Props = {
    currentPage: number;
    neighbours: (currentPage: number, totalPages: number) => number[];
    totalPages: number;
};

export default function Pagination({
    currentPage,
    neighbours,
    totalPages,
}: Props) {
    const [toRender, setToRender] = useState(() => {
        const allPages = neighbours(currentPage, totalPages).slice();
        console.log(allPages, 1);
        allPages.push(currentPage);
        if (!allPages.includes(totalPages)) {
            allPages.push(totalPages);
        }
        allPages.sort((a, b) => a - b);

        return allPages;
    });

    useEffect(() => {
        setToRender(() => {
            const allPages = neighbours(currentPage, totalPages).slice();
            allPages.push(currentPage);
            if (!allPages.includes(totalPages)) {
                allPages.push(totalPages);
            }
            if (!allPages.includes(1)) {
                allPages.push(1);
            }
            allPages.sort((a, b) => a - b);

            return allPages;
        });
    }, [currentPage]);

    console.log(toRender);

    return (
        <div className="col-span-full">
            <ul className="text-white flex flex-row flex-nowrap">
                {toRender.map((el, index) => {
                    if (currentPage === el) {
                        return (
                            //Active
                            <li key={el}>
                                <Link href={`/catalog/${el}`}>
                                    <a className="mx-1 px-2 py-1 rounded-lg bg-zinc-300">
                                        {el}
                                    </a>
                                </Link>
                            </li>
                        );
                    } else {
                        if (
                            el + 1 !== toRender[index + 1] &&
                            toRender[index + 1]
                        ) {
                            return (
                                <React.Fragment key={el}>
                                    <li>
                                        <Link href={`/catalog/${el}`}>
                                            <a className="mx-1 px-2 py-1 rounded-lg bg-[#00DF9A]">
                                                {el}
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <span className="mx-1 px-2 py-1 rounded-lg bg-[#00DF9A] select-none">
                                            ...
                                        </span>
                                    </li>
                                </React.Fragment>
                            );
                        } else {
                            return (
                                <li key={el}>
                                    <Link href={`/catalog/${el}`}>
                                        <a className="mx-1 px-2 py-1 rounded-lg bg-[#00DF9A]">
                                            {el}
                                        </a>
                                    </Link>
                                </li>
                            );
                        }
                    }
                })}
            </ul>
        </div>
    );
}
