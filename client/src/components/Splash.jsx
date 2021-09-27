import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="min-w-screen min-h-screen bg-dragon bg-no-repeat  bg-cover overflow-y-auto flex justify-center">
      <div className="sm:grid grid-cols-1 gap-2 lg:grid-cols-2 row-2">
        <div className="p-4 col-span-2">
          <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-3xl font-black font-serif my-4 bg-clip-text text-white">Welcome Hero!
          </h1>
        </div>
        <div className="p-4 col-span-2 max-w-md mx-auto">
          <p className=" text-3xl font-hand text-white">
          Create your own fantasy character to share with friends and inspire you in your next RPG or Coplay.<br/> Then enter "Ye Olde Tavern" to see charaters made by users all over the World!
        </p>
        </div>
        
        <Link to="/new">
          <div className="grid flex-grow h-32 card glass rounded-box font-hand place-items-center text-3xl hover:-translate-y-5 transform transition sm:text-white">
            Create a Hero
        </div>
          </Link>
          <Link to="/Tavern">
          <div className="grid flex-grow h-32 card glass rounded-box place-items-center text-3xl font-hand hover:-translate-y-5 transform transition sm:text-white">
            The Tavern
        </div>
          </Link>

      </div>
    </div>
  )
}

export default Hero



