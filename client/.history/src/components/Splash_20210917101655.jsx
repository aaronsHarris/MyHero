import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
          MyHero!
        </h1>
        <Link to='/' className='py-6 px-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce'>See Birds!</Link>
      </div>
    </div>
  )
}

export default Hero