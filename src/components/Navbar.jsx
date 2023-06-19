import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white">
            <div>
                <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                    <Link to="/">Food Ninja</Link>
                </h1>
            </div>
            <ul>
                <li>
                    <Link to="/"><span className="text-gray-700 font-bold">Home</span></Link>
                </li>
                <li>
                    <Link to="/about"><span className="">About</span></Link>
                </li>
                <li>
                    <Link to="/contact"><span className="">Contact</span></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
