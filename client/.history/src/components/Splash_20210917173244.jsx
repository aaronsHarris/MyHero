import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="conatiner">
      <div class="hero min-h-screen bg-base-200">
        <div class="text-center hero-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">
              Welcome Hero!
            </h1>
            <p class="mb-5">
              Show the world who you are and what kind of Hero you are. Then enter the Tavern and check out all the Heroes from around the world.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero