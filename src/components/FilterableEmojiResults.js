import React, { useState } from 'react'
import SearchBar from './SearchBar'
import emojiList from '../data/emojiList.json'
import EmojiResults from './EmojiResults'
import { filterEmojiResults } from './filterEmojiResults'

const FilterableEmojiResults = () => {
    const [query, setQuery] = useState('')

    const handleChange = (searchText) => {
        setQuery(searchText)
    }

    const emojiResults = filterEmojiResults(query, emojiList, 20)
    return (
        <div>
            <SearchBar query={query} handleChange={handleChange}/>
            <EmojiResults emojiResults={emojiResults}/>
        </div>
    )
}

export default FilterableEmojiResults
