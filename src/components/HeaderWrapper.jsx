import React from 'react'
import LoginSignup from './LoginSignup';
import Header from './Header';
import Recipes from './Recipes';

const HeaderWrapper = () => {
  return (
    <div className="px-16 py-6 bg-gray-100 md:col-span-4">
      <LoginSignup />
      <Header />
    </div>
  )
}

export default HeaderWrapper
