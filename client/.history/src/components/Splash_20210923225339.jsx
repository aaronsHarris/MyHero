import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="min-w-screen min-h-screen bg-dragon bg-no-repeat  bg-cover overflow-y-auto flex justify-center items-center">
      <div className="sm:grid grid-cols-1 gap-2 lg:grid-cols-2 ">
        <div className="p-4 bg-red-400 col-span-2"></div>
        <div className="p-4 bg-blue-400 col-span-2">Description</div>
        <div className="p-4 bg-yellow-400">Card 1</div>
        <div className="p-4 bg-green-400">Card 2</div>
        
      </div>
    </div>
  )
}

export default Hero



{/* <div className="conatiner">
      <div className="sm:hero flex min-h-screen w-screen bg-base-200 bg-dragon lg:bg-no-repeat bg-cover justify-center">
        <div className="max-w-md font-sans text-center">
          <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-3xl font-black my-14 bg-clip-text">Welcome Hero
          </h1>
          <p className="mb-28 text-2xl">
            Show the world who you are and what kind of Hero you are. Then enter the Tavern and check out all the Heroes from around the world.
          </p>
          <div className="sm:flex flex-col w-full lg:flex-row">

            <div className="grid flex-grow h-32 card glass rounded-box place-items-center">
              <Link to="/new">
                <button className="btn glass place-">Create a Hero!</button>
              </Link>
            </div>

            <div className="divider lg:divider-vertical">OR</div>
            
            <div className="grid flex-grow h-32 card glass rounded-box place-items-center">
              <Link to="/Tavern">
                <button className="btn glass">The Tavern</button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div> */}