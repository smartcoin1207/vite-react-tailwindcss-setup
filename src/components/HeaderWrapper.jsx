import React from 'react'
import LoginSignup from './LoginSignup';
import Header from './Header';
import Recipes from './Recipes';

const HeaderWrapper = () => {
  return (
    <div className="bg-no-repeat bg-right-top bg-cover bg-[url('./assets/images/headerbg.jpg')] px-16 py-6 md:col-span-4">
      <LoginSignup />
      <Header />
    </div>
  )
}

export default HeaderWrapper
