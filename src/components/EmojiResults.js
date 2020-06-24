import React from 'react'
import EmojiRow from './EmojiRow'

const EmojiResults = ({emojiResults}) => {
    return (
        <ul className="border-b">
            {emojiResults.map(emoji => <EmojiRow emoji={emoji}/>)}
        </ul>
    )
}

export default EmojiResults
