import { SearchIcon } from '@heroicons/react/solid';

export const SearchBar = () => {
    return (
        <div className="flex w-full flex-row justify-center sm:text-sm">
            <input
                className="px-2 py-2 bg-gray-600 w-4/5 rounded-l-md focus:outline-none sm:py-1"
                type="search"
                placeholder="Search..."
            />
            <button className="bg-[#00DF9A] px-2 rounded-r-md hover:text-black hover:scale-105 transition ease-out duration-300">
                <SearchIcon className="w-5 h-5" />
            </button>
        </div>
    );
};
