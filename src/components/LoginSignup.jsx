import React from 'react'
import { Link } from "react-router-dom";

const LoginSignup = () => {
  return (
    <main>
      <div className="w-full pb-8 flex justify-center md:justify-end">
        <Link to="/login"><span className="btn bg-black text-red-600 border-red-800 md:border-2  hover:bg-red-800 hover:border-white hover:text-white transition ease-out duration-500">Log in</span></Link>
        <Link to="/signup"><span className="btn bg-black text-red-600 ml-2  border-red-800 md:border-2  hover:bg-red-800 hover:border-white hover:text-white transition ease-out duration-500">Sign up</span></Link>
      </div>
    </main>
  )
}

export default LoginSignup
