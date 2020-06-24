import React from 'react'

const SearchBar = ({query, handleChange}) => {
    return (
        <div className="mx-8 my-2">
            <input
                value={query}
                onChange={e=>handleChange(e.target.value)}
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded py-2 px-4 w-full appearance-none"
                type="text"
                placeholder="Search emoji here..." />
        </div>
    )
}

export default SearchBar
