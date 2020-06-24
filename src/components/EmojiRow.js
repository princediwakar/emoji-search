import React from 'react'

const EmojiRow = ({emoji}) => {
    return (
        <li key={emoji.symbol} className="flex items-center border-t py-1 hover:bg-gray-100">
            <span className="text-3xl pl-8">{emoji.symbol}</span>
            <span className="pl-4">{emoji.title}</span>
        </li>
    )
}

export default EmojiRow
