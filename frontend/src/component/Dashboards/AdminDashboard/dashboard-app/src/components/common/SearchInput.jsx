import React from 'react';

const SearchInput = () => (
    <div className="relative">
        <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-md py-1 px-3 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
            className="absolute left-2 top-2 h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    </div>
);

export default SearchInput;