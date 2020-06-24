import React from 'react'

const smileCat = "😺"
const smileyCat = "😸"

const Header = () => {
    return (
        <header className="px-8 py-2">
            <h1 className="text-4xl text-center"><span>{smileCat}</span> Emoji Search <span>{smileyCat}</span></h1>
        </header>
    )
}

export default Header