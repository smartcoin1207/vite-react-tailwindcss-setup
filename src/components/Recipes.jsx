import React from 'react'
import stew from '../assets/images/stew.jpg'
import curry from '../assets/images/curry.jpg'
import noodles from '../assets/images/noodles.jpg'
import frynoodles from '../assets/images/frynoodles.jpg'
import quinoabowl from '../assets/images/quinoabowl.jpg'
import pickledansjovis from '../assets/images/pickledansjovis.jpg'
import pizza from '../assets/images/pizza.jpg'

const Recipes = () => {
  return (
    <div className="px-16 bg-gray-100 md:col-span-4">
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
      <div className="mt-8 grid lg:grid-cols-3 gap-10">

        {/* cards go here */}

        <div className="card hover:shadow-lg">
          <img src={stew} alt="stew" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-4">
            <span className="font-bold">5 bean chili stew</span>
            <span className="block text-gray-500 text-sm">Recipe by Gabriella</span>
          </div>
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="flex items-center">25 mins</span>
          </div>
        </div>

        <div className="card hover:shadow-lg">
          <img src={noodles} alt="noodles" className="w-full h-32 sm:h-48 object-cover" />
          <div className="m-4">
            <span className="font-bold">Veg Noodles</span>
            <span className="block text-gray-500 text-sm">Recipe by Mario</span>
          </div>
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="flex items-center">25 mins</span>
          </div>
        </div>

        <div className="card hover:shadow-lg">
          <img src={curry} alt="curry" className="w-full h-32 sm:h-48 object-cover" />
          <div className="m-4">
            <span className="font-bold">Tofu Curry</span>
            <span className="block text-gray-500 text-sm">Recipe by Luna</span>
          </div>
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span className="flex items-center">25 mins</span>
          </div>
        </div>

        <div className="card hover:shadow-lg">
          <img src={frynoodles} alt="stew" className="w-full h-32 sm:h-48 object-cover" />
          <div className="m-4">
            <span className="font-bold">Fry Noodles</span>
            <span className="block text-gray-500 text-sm">Recipe by Marco</span>
          </div>
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="flex items-center">25 mins</span>
          </div>
        </div>

        <div className="card hover:shadow-lg">
          <img src={quinoabowl} alt="noodles" className="w-full h-32 sm:h-48 object-cover" />
          <div className="m-4">
            <span className="font-bold">Quinoa Bowl</span>
            <span className="block text-gray-500 text-sm">Recipe by Franco</span>
          </div>
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="flex items-center">25 mins</span>
          </div>
        </div>

        <div className="card hover:shadow-lg">
          <img src={pickledansjovis} alt="curry" className="w-full h-32 sm:h-48 object-cover" />
          <div className="m-4">
            <span className="font-bold">Pickled Ansjovis</span>
            <span className="block text-gray-500 text-sm">Recipe by Paulo</span>
          </div>
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span className="flex items-center">25 mins</span>
          </div>
        </div>

      </div>

      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

     
      <div className="mt-8 grid lg:grid-cols-3 gap-10">
        <div className="card hover:shadow-lg">
          <img src={pizza} alt="curry" className="w-full h-32 sm:h-48 object-cover" />
          <div className="m-4">
            <span className="font-bold">Pizza Napolitana</span>
            <span className="block text-gray-500 text-sm">Recipe by Francesca</span>
          </div>
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span className="flex items-center">25 mins</span>
          </div>
        </div>
      </div>
      

      <div className="flex justify-center mb-10 mt-10">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:opacity-50 transition ease-out duration-300">Load more</div>
      </div>
    </div>
  )
}

export default Recipes
