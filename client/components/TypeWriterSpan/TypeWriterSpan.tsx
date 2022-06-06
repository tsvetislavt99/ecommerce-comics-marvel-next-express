import React, { useState } from 'react';

type Props = {
    chars: {
        name: String;
        cssClassName: string;
    }[];
};

export default function TypeWriterSpan({ chars }: Props) {
    const [active, setActive] = useState(chars[0] ? chars[0] : def);
    const [reWrite, setReWrite] = useState(false);
    const clickHandler = () => {
        if (chars.length > 0) {
            const newActive = chars.pop();
            chars.unshift(newActive ? newActive : def);
            setActive(newActive ? newActive : def);
            setReWrite(true);
            setTimeout(() => {
                setReWrite(false);
            }, 500);
        }
    };

    return (
        <span
            onClick={clickHandler}
            className={
                reWrite
                    ? "text-[#00df9a] mx-1 font-mono relative before:content-[''] after:content-[''] before:absolute after:absolute before:top-0 after:top-0 before:bottom-0 after:bottom-0 before:left-0 after:left-0 before:right-0 after:right-0 before:bg-[#18181B] after:w-[0.15em] after:bg-black after:animate-[blink_750ms_steps(2)_infinite]"
                    : active.cssClassName
            }
        >
            {active.name}
        </span>
    );
}

const def = {
    name: 'Spiderman',
    cssClassName:
        "text-[#00df9a]cursor-pointer select-none hover:underline mx-1 font-mono relative before:content-[''] after:content-[''] before:absolute after:absolute before:top-0 after:top-0 before:bottom-0 after:bottom-0 before:left-0 after:left-0 before:right-0 after:right-0 before:bg-[#18181B] before:animate-[typewriter_1s_steps(9)_forwards_1s] after:w-[0.15em] after:bg-black after:animate-[typewriter_1s_steps(9)_forwards_1s,_blink_750ms_steps(2)_infinite]",
};
