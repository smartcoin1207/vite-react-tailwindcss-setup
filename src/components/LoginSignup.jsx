import React from 'react'
import { Link } from "react-router-dom";

const LoginSignup = () => {
  return (
    <main>
      <div className="w-full pb-8 flex justify-center md:justify-end">
        <Link to="/login"><span className="btn text-red-800 border-red-800 md:border-2  hover:bg-primary hover:border-primary hover:text-white transition ease-out duration-500">Log in</span></Link>
        <Link to="/signup"><span className="btn text-red-800 ml-2  border-red-800 md:border-2  hover:bg-primary hover:border-primary hover:text-white transition ease-out duration-500">Sign up</span></Link>
      </div>
    </main>
  )
}

export default LoginSignup
