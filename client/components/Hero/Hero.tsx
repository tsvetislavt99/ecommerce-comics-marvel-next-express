import Link from 'next/link';
import Image from 'next/image';
import TypeWriterSpan from '../TypeWriterSpan/TypeWriterSpan';

export const Hero = () => {
    return (
        <section className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 max-w-[1240px] mx-auto px-4 -z-20">
            <div className="text-white">
                <div className="flex flex-col mx-auto justify-center items-center h-screen">
                    <p className="text-[#00df9a] text-sm lg:text-base font-semibold uppercase">
                        Find all the cool comics here!
                    </p>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                        Comics lib.
                    </h1>
                    <div className="flex flex-nowrap">
                        <p className="text-xs sm:text-base">
                            No matter if you are a&nbsp;
                            <TypeWriterSpan chars={chars} />
                            &nbsp;fan!
                        </p>
                    </div>
                    <button className="text-lg mt-8 px-10 py-3 bg-[#00df9a] hover:text-black hover:scale-105 transition ease-out duration-300 rounded-md">
                        <Link href="/catalog">Check the catalog out!</Link>
                    </button>
                </div>
            </div>
            <div className="text-white flex flex-col flex-nowrap items-center">
                <h1 className="text-3xl sm:text-5xl font-bold">Featured:</h1>
                <p className="mb-5 text-xs">
                    Check out the Moon Knight comic series now:
                </p>
                <div className="hover:scale-105 duration-300 max-w-sm w-52 sm:w-96 md:w-80">
                    <Image
                        alt="featured-comics"
                        src="/images/featured.jpg"
                        layout="responsive"
                        width={50}
                        height={75}
                    />
                </div>
            </div>
        </section>
    );
};

const chars = [
    {
        name: 'Hulk',
        cssClassName:
            "text-[#00df9a] cursor-pointer select-none hover:underline mx-1 font-mono relative before:content-[''] after:content-[''] before:absolute after:absolute before:top-0 after:top-0 before:bottom-0 after:bottom-0 before:left-0 after:left-0 before:right-0 after:right-0 before:bg-[#18181B] before:animate-[typewriter_500ms_steps(4)_forwards_1s] after:w-[0.15em] after:bg-black after:animate-[typewriter_500ms_steps(4)_forwards_1s,_blink_750ms_steps(2)_infinite]",
    },
    {
        name: 'Ironman',
        cssClassName:
            "text-[#00df9a] cursor-pointer select-none hover:underline mx-1 font-mono relative before:content-[''] after:content-[''] before:absolute after:absolute before:top-0 after:top-0 before:bottom-0 after:bottom-0 before:left-0 after:left-0 before:right-0 after:right-0 before:bg-[#18181B] before:animate-[typewriter_1s_steps(7)_forwards] after:w-[0.15em] after:bg-black after:animate-[typewriter_1s_steps(7)_forwards,_blink_750ms_steps(2)_infinite]",
    },
    {
        name: 'Spiderman',
        cssClassName:
            "text-[#00df9a] cursor-pointer select-none hover:underline mx-1 font-mono relative before:content-[''] after:content-[''] before:absolute after:absolute before:top-0 after:top-0 before:bottom-0 after:bottom-0 before:left-0 after:left-0 before:right-0 after:right-0 before:bg-[#18181B] before:animate-[typewriter_1s_steps(9)_forwards] after:w-[0.15em] after:bg-black after:animate-[typewriter_1s_steps(9)_forwards,_blink_750ms_steps(2)_infinite]",
    },
    {
        name: 'Dr. Strange',
        cssClassName:
            "text-[#00df9a] cursor-pointer select-none hover:underline mx-1 font-mono relative before:content-[''] after:content-[''] before:absolute after:absolute before:top-0 after:top-0 before:bottom-0 after:bottom-0 before:left-0 after:left-0 before:right-0 after:right-0 before:bg-[#18181B] before:animate-[typewriter_1s_steps(11)_forwards] after:w-[0.15em] after:bg-black after:animate-[typewriter_1s_steps(11)_forwards,_blink_750ms_steps(2)_infinite]",
    },
    {
        name: 'Fantastic Four',
        cssClassName:
            "text-[#00df9a] cursor-pointer select-none hover:underline mx-1 font-mono relative before:content-[''] after:content-[''] before:absolute after:absolute before:top-0 after:top-0 before:bottom-0 after:bottom-0 before:left-0 after:left-0 before:right-0 after:right-0 before:bg-[#18181B] before:animate-[typewriter_1s_steps(14)_forwards] after:w-[0.15em] after:bg-black after:animate-[typewriter_1s_steps(14)_forwards,_blink_750ms_steps(2)_infinite]",
    },
];
