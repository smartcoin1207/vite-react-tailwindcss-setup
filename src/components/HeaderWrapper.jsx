import React from 'react'
import LoginSignup from './LoginSignup';
import Header from './Header';

const HeaderWrapper = () => {
  return (
    <div className="px-16 py-6 bg-gray-100">
      <LoginSignup />
      <Header />
      
    </div>
  )
}

export default HeaderWrapper
