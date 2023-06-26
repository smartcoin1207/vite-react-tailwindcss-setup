import React from 'react'
import stew from '../assets/images/stew.jpg'
import curry from '../assets/images/curry.jpg'
import noodles from '../assets/images/noodles.jpg'
import frynoodles from '../assets/images/frynoodles.jpg'
import quinoabowl from '../assets/images/quinoabowl.jpg'
import pickledansjovis from '../assets/images/pickledansjovis.jpg'
import pizza from '../assets/images/pizza.jpg'
import gazpacho from '../assets/images/gaspacho.jpg'
import cabbagerolls from '../assets/images/cabbagerolls.jpg'
import steak from '../assets/images/steak.jpg'
import pepersmild from '../assets/images/pepersmild.png'
import pepersmildx from '../assets/images/pepersmildx.png'
import pepershot from '../assets/images/pepershot.png'
import pepershotx from '../assets/images/pepershotx.png'
import pepershotxx from '../assets/images/pepershotxx.png'
import magnifyingglass from '../assets/images/magnifyingglass.svg'

const Recipes = () => {
  return (
    <div className="px-16 md:col-span-4">

      <div className="flex justify-end mt-6 relative">
        <img src={magnifyingglass} alt="magnifyingglass" className="absolute top-2 right-3"/>
        <input type="text" className="bg-black border-2 border-gray-400 rounded-full pl-2 h-8 text-white" placeholder="Search…" />
      </div>

      <h4 className="text-gray-400 font-bold pb-2 border-b border-gray-600 [letter-spacing:2px]">Latest Recipes:</h4>
      <div className="mt-8 grid grid-cols-1 small:grid-cols-2 gap-10 md:grid-cols-2 middle:grid-cols-3">

        {/* cards go here */}

        <div className="card shadow transition duration-500 flex items-start flex-col border-gray-400">
          <img src={stew} alt="stew" className="w-full h-48 object-cover" />
          <div className="w-full h-20 bg-gradient-to-b from-white to-gray-400 flex items-start justify-center flex-col pl-4">
            <span className="font-bold">5 bean chili stew</span>
            <span className="block text-gray-600 text-sm">Recipe by Gabriella</span>

          </div>
          <img src={pepersmild} alt="" className="w-6 absolute bottom-0 right-0 mb-6 mr-4" />
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="flex items-center">25 mins</span>
          </div>
        </div>

        <div className="card shadow transition duration-500 flex items-start flex-col border-gray-400">
          <img src={noodles} alt="noodles" className="w-full h-48 object-cover" />
          <div className="w-full h-20 bg-gradient-to-b from-white to-gray-400 flex items-start justify-center flex-col pl-4">
            <span className="font-bold">Veg Noodles</span>
            <span className="block text-gray-600 text-sm">Recipe by Mario</span>
          </div>
          <img src={pepersmildx} alt="" className="w-6 absolute bottom-0 right-0 mb-6 mr-4" />
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="flex items-center">25 mins</span>
          </div>
        </div>

        <div className="card shadow transition duration-500 flex items-start flex-col border-gray-400">
          <img src={curry} alt="curry" className="w-full h-48 object-cover" />
          <div className="w-full h-20 bg-gradient-to-b from-white to-gray-400 flex items-start justify-center flex-col pl-4">
            <span className="font-bold">Tofu Curry</span>
            <span className="block text-gray-600 text-sm">Recipe by Luna</span>
          </div>
          <img src={pepershotxx} alt="" className="w-6 absolute bottom-0 right-0 mb-6 mr-4" />
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span className="flex items-center">25 mins</span>
          </div>
        </div>

        <div className="card shadow transition duration-500 flex items-start flex-col border-gray-400">
          <img src={frynoodles} alt="stew" className="w-full h-48 object-cover" />
          <div className="w-full h-20 bg-gradient-to-b from-white to-gray-400 flex items-start justify-center flex-col pl-4">
            <span className="font-bold">Fry Noodles</span>
            <span className="block text-gray-600 text-sm">Recipe by Marco</span>
          </div>
          <img src={pepershot} alt="" className="w-6 absolute bottom-0 right-0 mb-6 mr-4" />
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="flex items-center">25 mins</span>
          </div>
        </div>

        <div className="card shadow transition duration-500 flex items-start flex-col border-gray-400">
          <img src={quinoabowl} alt="noodles" className="w-full h-48 object-cover" />
          <div className="w-full h-20 bg-gradient-to-b from-white to-gray-400 flex items-start justify-center flex-col pl-4">
            <span className="font-bold">Quinoa Bowl</span>
            <span className="block text-gray-600 text-sm">Recipe by Franco</span>
          </div>
          <img src={pepershotx} alt="" className="w-6 absolute bottom-0 right-0 mb-6 mr-4" />
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="flex items-center">25 mins</span>
          </div>
        </div>

        <div className="card shadow transition duration-500 flex items-start flex-col border-gray-400">
          <img src={pickledansjovis} alt="curry" className="w-full h-48 object-cover" />
          <div className="w-full h-20 bg-gradient-to-b from-white to-gray-400 flex items-start justify-center flex-col pl-4">
            <span className="font-bold">Pickled Ansjovis</span>
            <span className="block text-gray-600 text-sm">Recipe by Paulo</span>
          </div>
          <img src={pepersmildx} alt="" className="w-6 absolute bottom-0 right-0 mb-6 mr-4" />
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span className="flex items-center">20 mins</span>
          </div>
        </div>

        <div className="card shadow transition duration-500 flex items-start flex-col border-gray-400">
          <img src={steak} alt="stew" className="w-full h-48 object-cover" />
          <div className="w-full h-20 bg-gradient-to-b from-white to-gray-400 flex items-start justify-center flex-col pl-4">
            <span className="font-bold">Steak stir fried vegetables</span>
            <span className="block text-gray-600 text-sm">Recipe by Georgina</span>
          </div>
          <img src={pepersmildx} alt="" className="w-6 absolute bottom-0 right-0 mb-6 mr-4" />
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="flex items-center">30 mins</span>
          </div>
        </div>

        <div className="card shadow transition duration-500 flex items-start flex-col border-gray-400">
          <img src={gazpacho} alt="noodles" className="w-full h-48 object-cover" />
          <div className="w-full h-20 bg-gradient-to-b from-white to-gray-400 flex items-start justify-center flex-col pl-4">
            <span className="font-bold">Gazpacho</span>
            <span className="block text-gray-600 text-sm">Recipe by Carla</span>
          </div>
          <img src={pepersmild} alt="" className="w-6 absolute bottom-0 right-0 mb-6 mr-4" />
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="flex items-center">45 mins</span>
          </div>
        </div>

        <div className="card shadow transition duration-500 flex items-start flex-col border-gray-400">
          <img src={cabbagerolls} alt="curry" className="w-full h-48 object-cover" />
          <div className="w-full h-20 bg-gradient-to-b from-white to-gray-400 flex items-start justify-center flex-col pl-4">
            <span className="font-bold">Stuffed Cabbage Rolls</span>
            <span className="block text-gray-600 text-sm">Recipe by Gianfranco</span>
          </div>
          <img src={pepersmild} alt="" className="w-6 absolute bottom-0 right-0 mb-6 mr-4" />
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span className="flex items-center">55 mins</span>
          </div>
        </div>

      </div>

      <h4 className="text-gray-400 font-bold mt-12 pb-2 border-b border-gray-600 [letter-spacing:2px]">Most Popular:</h4>


      <div className="mt-8 grid lg:grid-cols-3 gap-10">
        <div className="card shadow transition duration-500 flex items-start flex-col border-gray-400">
          <img src={pizza} alt="curry" className="w-full h-48 object-cover" />
          <div className="w-full h-20 bg-gradient-to-b from-white to-gray-400 flex items-start justify-center flex-col pl-4">
            <span className="font-bold">Pizza Napolitana</span>
            <span className="block text-gray-600 text-sm">Recipe by Francesca</span>
          </div>
          <img src={pepersmildx} alt="" className="w-6 absolute bottom-0 right-0 mb-6 mr-4" />
          <div className="badge">
            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span className="flex items-center">25 mins</span>
          </div>
        </div>
      </div>


      <div className="flex justify-center mb-10 mt-20">
        <div className="bg-gray-600 text-white text-sm rounded-full py-2 px-4 cursor-pointer transform hover:scale-125 transition ease-out duration-300">Load more</div>
      </div>
    </div>
  )
}

export default Recipes
