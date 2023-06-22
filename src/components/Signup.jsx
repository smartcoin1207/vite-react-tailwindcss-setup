import React, {useState} from 'react'

const Signup = () => {

const [ user, setUser ] = useState({
  firstName:"",
lastName:"",
address:"",
city:"",
country:"",
email:"",
password:"",
password2:"",
})

const onChangeInput = (e)=> {
  const { name, value } = e.target
  setUser({
    ...user, [name]:value
  })
}

const onSubmitForm = (e) => {
  e.preventDefault()
  console.log(user)
setUser({
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  country: "",
  email: "",
  password: "",
  password2: "",
  })
  
}

  return (
    <div className="h-screen bg-gray-100 md:col-span-4 flex justify-start flex-col">
      <span className="w-full flex justify-center text-2xl mt-4">Register</span>
      <div className="w-full h-1/5 flex justify-between">

        <form onSubmit={onSubmitForm} className="w-full flex flex-col items-center mt-10">

          <label className="w-80 mb-2 flex justify-between border-b border-slate-500">
            <span className="w-20 mr-2 flex items-center">Firstname:</span>
            <input className="w-60 h-8 bg-gray-100 focus:outline-none"
              type="text"
              defaultValue={user.firstName}
              name="firstName"
              placeholder="Firstname"
              onChange={onChangeInput}
            />
          </label>
          <label className="w-80 mb-2 flex justify-between border-b border-slate-500">
            <span className="w-20 mr-2 flex items-center">Lastname:</span>
            <input className="w-60 h-8 bg-gray-100 focus:outline-none"
              type="text"
              defaultValue={user.lastName}
              name="lastName"
              placeholder="Lastname"
              onChange={onChangeInput}
            />
          </label>
          <label className="w-80 mb-2 flex justify-between border-b border-slate-500">
            <span className="w-20 mr-2 flex items-center">Address:</span>
            <input className="w-60 h-8 bg-gray-100 focus:outline-none"
              type="text"
              defaultValue={user.address}
              name="address"
              placeholder="Address"
              onChange={onChangeInput}
            />
          </label>
          <label className="w-80 mb-2 flex justify-between border-b border-slate-500">
            <span className="w-20 mr-2 flex items-center">City:</span>
            <input className="w-60 h-8 bg-gray-100 focus:outline-none"
              type="text"
              defaultValue={user.city}
              name="city"
              placeholder="City"
              onChange={onChangeInput}
            />
          </label>
          <label className="w-80 mb-2 flex justify-between border-b border-slate-500">
            <span className="w-20 mr-2 flex items-center">Country:</span>
            <input className="w-60 h-8 bg-gray-100 focus:outline-none"
              type="text"
              defaultValue={user.country}
              name="country"
              placeholder="Country"
              onChange={onChangeInput}
            />
          </label>
          <label className="w-80 mb-2 flex justify-between border-b border-slate-500">
            <span className="w-20 mr-2 flex items-center">Email:</span>
            <input className="w-60 h-8 bg-gray-100 focus:outline-none"
              type="text"
              defaultValue={user.email}
              name="email"
              placeholder="Email"
              onChange={onChangeInput}
            />
          </label>
          <label className="w-80 mb-2 flex justify-between border-b border-slate-500">
            <span className="w-20 mr-2 flex items-center">Password:</span>
            <input className="w-60 h-8 bg-gray-100 focus:outline-none"
              type="password"
              defaultValue={user.password}
              name="password"
              placeholder="password"
              onChange={onChangeInput}
            />
          </label>
          <label className="mb-8 w-80 flex justify-between border-b border-slate-500">
            <span className="w-20 mr-2 flex items-center">Repeat:</span>
            <input className="w-60 h-8 bg-gray-100 focus:outline-none"
              type="password"
              defaultValue={user.password2}
              name="password2"
              placeholder="Repeat Password"
              onChange={onChangeInput}
            />
          </label>
          <div className="w-80 flex justify-end">
            <button type="submit" className="w-full h-8 bg-slate-500 text-white hover:bg-red-600 transition duration-500">submit</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup
