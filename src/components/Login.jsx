import React, { useState } from 'react'

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const onChangeInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    console.log(user)
    setUser({email:"", password: ""})
  }

  return (
    <div className="h-screen bg-gray-100 md:col-span-4 flex justify-start flex-col">
      <span className="w-full flex justify-center text-2xl mt-4">Login</span>
      <div className="w-full h-1/5 flex justify-between">

        <form onSubmit={onSubmitForm} className="w-full flex flex-col items-center mt-10">

          <label className="w-80 mb-2 flex justify-between border-b border-slate-500">
            <span className="w-20 mr-2 flex items-center">Email:</span>
            <input className="w-60 h-8  bg-gray-100 focus:outline-none"
              type="email"
              value={user.email}
              name="email"
              placeholder="Email"
              onChange={onChangeInput}
            />
          </label>
          <label className="mb-8 w-80 flex justify-between border-b border-slate-500">
            <span className="w-20 mr-2 flex items-center">Password:</span>
            <input className="w-60 h-8  bg-gray-100 focus:outline-none"
              type="password"
              value={user.password}
              name="password"
              placeholder="Password"
              onChange={onChangeInput}
            />
          </label>
          <div className="w-80 flex justify-end">
            <button className="w-full h-8 bg-slate-500 text-white hover:bg-red-600 transition duration-500" type="submit">submit</button>
          </div>
         
        </form>
      </div>
    </div>
  )
}

export default Login
