import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
} from '@heroicons/react/solid';
import React, { useReducer, useState } from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';

const initialState = {
    startX: 0,
};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'updateStartX':
            return { ...state, startX: action.payload };
    }
};

const carouselCofig = [
    { bgName: 'hulk' },
    { bgName: 'drstrange' },
    { bgName: 'spiderman' },
    { bgName: 'ironman' },
];

export default function Carousel() {
    const [active, setActive] = useState(1);
    //TODO: Update for better handling of touch events
    const [state, dispath] = useReducer(reducer, initialState);

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

    const handleTouchStart = (e: MouseEvent | TouchEvent) => {
        if (e.type.includes('mouse')) {
            const mouseEvent = e as MouseEvent;
            const action = {
                type: 'updateStartX',
                payload: mouseEvent.clientX,
            };
            dispath(action);
        } else {
            const touchEvent = e as TouchEvent;
            const action = {
                type: 'updateStartX',
                payload: touchEvent.changedTouches[0].clientX,
            };
            dispath(action);
        }
    };

    const handleTouchEnd = (e: MouseEvent | TouchEvent) => {
        if (e.type.includes('mouse')) {
            const mouseEvent = e as MouseEvent;
            const currX = mouseEvent.clientX;
            if (state.startX - 50 > currX) {
                handleRightChange();
                return;
            } else if (state.startX + 50 < currX) {
                handleLeftChange();
                return;
            }
        } else {
            const touchEvent = e as TouchEvent;
            const currX = touchEvent.changedTouches[0].clientX;
            if (state.startX - 50 > currX) {
                handleRightChange();
                return;
            } else if (state.startX + 50 < currX) {
                handleLeftChange();
                return;
            }
        }
    };

    return (
        <div className="flex flex-row items-center h-96 text-[#00DF9A] w-full">
            <ChevronDoubleLeftIcon
                className={
                    active === 1
                        ? 'relative left-0 h-6 w-6 opacity-60 -mr-6 z-20'
                        : 'relative left-0 h-6 w-6 -mr-6 z-20'
                }
                onClick={handleLeftChange}
            />
            {carouselCofig.map((item, index) => (
                <CarouselItem
                    key={item.bgName}
                    handleTouchEnd={handleTouchEnd}
                    handleTouchStart={handleTouchStart}
                    active={active}
                    itemNumber={index + 1}
                    bgName={item.bgName}
                />
            ))}
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
