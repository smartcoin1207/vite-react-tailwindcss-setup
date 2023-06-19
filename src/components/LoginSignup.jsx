import React from 'react'
import { Link } from "react-router-dom";

const LoginSignup = () => {
  return (
    <main className="px-16 py-6">
      <div className="flex justify-center md:justify-end ">
        <Link to="/login"><span className="text-primary">Log in</span></Link>
        <Link to="/signup"><span className="text-primary ml-2">Sign up</span></Link>
      </div>
    </main>
  )
}

export default LoginSignup
