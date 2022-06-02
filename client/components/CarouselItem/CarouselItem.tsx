import React from 'react';

type Props = {
    handleTouchStart: (e: any) => void;
    handleTouchEnd: (e: any) => void;
    active: Number;
    itemNumber: Number;
    bgName: string;
};

export default function CarouselItem(props: Props) {
    return (
        <div
            onTouchStart={props.handleTouchStart}
            onTouchEnd={props.handleTouchEnd}
            onMouseDown={props.handleTouchStart}
            onMouseUp={props.handleTouchEnd}
            className={
                props.active === props.itemNumber
                    ? `relative w-full h-full duration-500 bg-${props.bgName} bg-cover`
                    : `relative w-0 h-0  duration-500 bg-${props.bgName} bg-cover`
            }
        ></div>
    );
}
