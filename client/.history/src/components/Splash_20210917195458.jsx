import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div classNamee="conatiner">
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome Hero!
            </h1>
            <p className="mb-5">
              Show the world who you are and what kind of Hero you are. Then enter the Tavern and check out all the Heroes from around the world.
            </p>
            <div className=" flex items-center justify-center bg-cover bg-base-200 ">
              <div className="p-2 bg-cover bg-base-200 justify-center">
                <Link to="/new">
                  <button className="btn glass">Create a Hero!</button>
                </Link>
              </div>
              <div className="p-2 bg-cover bg-base-200">
                <Link to="/Tavern">
                  <button className="btn glass">The Tavern</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero