import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div Name="conatiner">
      <div ="hero min-h-screen bg-base-200">
        <div ="text-center hero-content">
          <div ="max-w-md">
            <h1 ="mb-5 text-5xl font-bold">
              Welcome Hero!
            </h1>
            <p ="mb-5">
              Show the world who you are and what kind of Hero you are. Then enter the Tavern and check out all the Heroes from around the world.
            </p>
            <div Name=" flex items-center justify-center bg-cover bg-base-200 ">
              <div ="p-2 bg-cover bg-base-200 justify-center">
                <Link to="/new">
                  <button ="btn glass">Create a Hero!</button>
                </Link>
              </div>
              <div ="p-2 bg-cover bg-base-200">
                <Link to="/Tavern">
                  <button ="btn glass">The Tavern</button>
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