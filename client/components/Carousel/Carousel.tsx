import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
} from '@heroicons/react/solid';
import React, { useState } from 'react';

export default function Carousel() {
    const [active, setActive] = useState(1);

    const handleLeftChange = () => {
        setActive((currActive) => {
            if (currActive > 1) {
                return currActive - 1;
            }
            return currActive;
        });
    };

    const handleRightChange = () => {
        setActive((currActive) => {
            if (currActive < 4) {
                return currActive + 1;
            }
            return currActive;
        });
    };
    console.log(active);

    return (
        <div className="flex flex-row items-center h-96 border w-full border-red-500 text-red-500">
            <ChevronDoubleLeftIcon
                className={
                    active === 1
                        ? 'relative left-0 h-6 w-6 opacity-60 -mr-6 z-20'
                        : 'relative left-0 h-6 w-6 -mr-6 z-20'
                }
                onClick={handleLeftChange}
            />
            <div
                className={
                    active === 1
                        ? 'relative w-full h-full duration-500 bg-blue-500'
                        : 'relative w-0 h-0  duration-500 bg-blue-500'
                }
            ></div>
            <div
                className={
                    active === 2
                        ? 'relative w-full h-full  duration-500 bg-red-500'
                        : 'relative w-0 h-0  duration-500 bg-red-500'
                }
            ></div>
            <div
                className={
                    active === 3
                        ? 'relative w-full h-full duration-500 bg-green-500'
                        : 'relative w-0 h-0  duration-500 bg-green-500'
                }
            ></div>
            <div
                className={
                    active === 4
                        ? 'relative w-full h-full  duration-500 bg-pink-500'
                        : 'relative w-0 h-0  duration-500 bg-pink-500'
                }
            ></div>
            <ChevronDoubleRightIcon
                className={
                    active === 4
                        ? 'relative left-0 h-6 w-6 opacity-60 -ml-6 z-20'
                        : 'relative left-0 h-6 w-6 -ml-6 z-20'
                }
                onClick={handleRightChange}
            />
        </div>
    );
}
