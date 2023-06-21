import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

    const [ menuOpen, setMenuOpen ] = React.useState(false)

    const openMenu = () => {
          setMenuOpen(!menuOpen)
    }

    return (
        <nav className="md:col-span-1">
            <div className="flex justify-between items-center">
                <h1 className="font-bold uppercase p-4 border-b border-gray-100 hover:text-gray-700">
                    <Link to="/">Food Ninja</Link>
                </h1>
                <div className="px-4 cursor-pointer md:hidden" id="burger" onClick={openMenu}>
                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-end text-right" >
                <ul className={!menuOpen ? "text-sm mt-6 hidden md:block" : "w-full absolute bg-white z-10 py-4 shadow-[0px_4px_4px_rgba(0,0,0,0.4)] opacity-80"} >
                    <li className="py-1" onClick={() => setMenuOpen(false)}>
                        <Link to="/" className="px-4 flex justify-end border-r-4 border-primary">
                        <span className="mr-2">Home</span>
                        <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </li>
                    <li className="py-1" onClick={() => setMenuOpen(false)}>
                        <Link to="/about" className="px-4 flex justify-end border-r-4 border-white">
                            <span className="mr-2">About</span>
                        <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>
                    </Link>
                </li>
                    <li className="py-1" onClick={() => setMenuOpen(false)}>
                        <Link to="/contact" className="px-4 flex justify-end border-r-4 border-white">
                            <span className="mr-2">Contact</span>
                        <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
