type Props = {
    name: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    comicsAvailable: number;
};

export const SidebarCard = (props: Props) => {
    return (
        <li className="flex text-white flex-row flex-nowrap m-2 mb-4 items-center w-full">
            <img
                className="h-16 w-16 rounded-full"
                src={`${props.thumbnail.path}.${props.thumbnail.extension}`}
                alt="superhero"
            />
            <div className="ml-2 w-3/5">
                <h1 className="text-lg pb-6 h-2">
                    {props.name.substring(0, props.name.indexOf('(')) ||
                        props.name}
                </h1>
                <p className="text-sm w-full">
                    Appears in {props.comicsAvailable} comics!
                </p>
                <p className="text-xs">
                    Check out{' '}
                    <span className="font-mono text-[#00DF9A]">
                        {props.name}
                    </span>{' '}
                    comics!
                </p>
                <div className="border-b border-1 border-b-gray-600 w-[100%]"></div>
            </div>
        </li>
    );
};
