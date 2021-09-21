import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="conatiner">
      <div className="sm:hero flex min-h-screen w-screen bg-base-200 bg-dragon lg:bg-no-repeat bg-cover justify-center">
        <div className="text-center hero-content card glass m-auto flex">
          <div className="max-w-md font-serif">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome Hero!
            </h1>
            <p className="mb-5">
              Show the world who you are and what kind of Hero you are. Then enter the Tavern and check out all the Heroes from around the world.
            </p>
            <div className="container flex justify-between">
              <div className="container p-2">
                <Link to="/new">
                  <button className="btn glass">Create a Hero!</button>
                  </Link>
                <div className="p-2">
                  <Link to="/Tavern">
                  <button className="btn glass">The Tavern</button>
                  </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero