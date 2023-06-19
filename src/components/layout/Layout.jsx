import React from 'react'
import Navbar from '../Navbar'
import HeaderWrapper from '../HeaderWrapper'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeaderWrapper />
      <main>{children}</main>
    <Outlet />
    </div>
  )
}

export default Layout
