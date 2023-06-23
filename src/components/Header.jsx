import React from 'react'

const Header = () => {
    return (
        <header className="mt-2 flex items-center flex-col md:items-start">
            <div className="text-gray-100 text-6xl [text-shadow:_0_1px_4px_rgb(0_0_0_/_100%)]">Recipes</div>
            <div className="text-1xl text-gray-400 pt-1 pl-1 font-semibold [letter-spacing:4px] [word-spacing:6px]">for the Gourmand</div>
        </header>
        
    )
}

export default Header
