import React from 'react'
import { Link } from "react-router-dom";

const LoginSignup = () => {
  return (
    <main className="md:px-16 py-6 bg-gray-100">
      <div className="w-full flex justify-center md:justify-end">
        <Link to="/login"><span className="btn text-primary border-primary md:border-2  hover:bg-primary hover:text-white transition ease-out duration-500">Log in</span></Link>
        <Link to="/signup"><span className="btn text-primary ml-2  border-primary md:border-2  hover:bg-primary hover:text-white transition ease-out duration-500">Sign up</span></Link>
      </div>
    </main>
  )
}

export default LoginSignup
