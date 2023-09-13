import React from 'react'
import pizza from '../assets/images/pizza.jpg'
import pepersmildx from '../assets/images/pepersmildx.png'
import magnifyingglass from '../assets/images/magnifyingglass.svg'
import { data } from '../data/data'

const Recipes = () => {
  return (
    <div className="px-16 md:col-span-4">
      <div className="flex justify-end mt-6 relative">
        <img
          src={magnifyingglass}
          alt="magnifyingglass"
          className="absolute top-2 right-3"
        />
        <input
          type="text"
          className="bg-black border-2 border-gray-400 rounded-full pl-2 h-8 text-white w-full small:w-60 mb-4 small:mb-0"
          placeholder="Search…"
        />
      </div>

      <h4 className="text-gray-400 font-bold pb-2 border-b border-gray-600 [letter-spacing:2px]">
        Latest Recipes:
      </h4>
      <div className="mt-8 grid grid-cols-1 small:grid-cols-2 gap-10 md:grid-cols-2 middle:grid-cols-3">
        {/* cards go here */}

        {data.map((recipe) => (
          <div
            className="card shadow transition duration-500 flex items-start flex-col border-gray-400"
            key={recipe.id}
          >
            <img
              src={`images/${recipe.img}`}
              alt="stew"
              className="w-full h-48 object-cover"
            />
            <div className="w-full h-20 bg-gradient-to-b from-white to-gray-400 flex items-start justify-center flex-col pl-4">
              <span className="font-bold">{recipe.title}</span>
              <span className="block text-gray-600 text-sm">
                Recipe by {recipe.author}
              </span>
            </div>
            <div className="w-full [background-color:#990000] text-gray-200 text-sm p-1 flex justify-center">
              view recipe
            </div>
            <img
              src={`images/${recipe.hot}`}
              alt=""
              className="w-6 absolute bottom-0 right-0 mb-12 mr-4"
            />
            <div className="badge">
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="flex items-center ml-1">{recipe.duration}</span>
            </div>
          </div>
        ))}
      </div>

      <h4 className="text-gray-400 font-bold mt-12 pb-2 border-b border-gray-600 [letter-spacing:2px]">
        Most Popular:
      </h4>

      <div className="mt-8 grid lg:grid-cols-3 gap-10">
        <div className="card shadow transition duration-500 flex items-start flex-col border-gray-400">
          <img src={pizza} alt="curry" className="w-full h-48 object-cover" />
          <div className="w-full h-20 bg-gradient-to-b from-white to-gray-400 flex items-start justify-center flex-col pl-4">
            <span className="font-bold">Pizza Napolitana</span>
            <span className="block text-gray-600 text-sm">
              Recipe by Francesca
            </span>
          </div>
          <div className="w-full [background-color:#990000] text-gray-200 text-sm p-1 flex justify-center">
            view recipe
          </div>
          <img
            src={pepersmildx}
            alt=""
            className="w-6 absolute bottom-0 right-0 mb-12 mr-4"
          />
          <div className="badge">
            <svg
              className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span className="flex items-center ml-1">25 mins</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-10 mt-20">
        <div className="bg-gray-600 text-white text-sm rounded-full py-2 px-4 cursor-pointer transform hover:scale-125 transition ease-out duration-300">
          Load more
        </div>
      </div>
    </div>
  );
}

export default Recipes
