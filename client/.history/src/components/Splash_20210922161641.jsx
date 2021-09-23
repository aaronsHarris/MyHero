import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="conatiner">
      <div className="sm:hero flex min-h-screen w-screen bg-base-200 bg-dragon lg:bg-no-repeat bg-cover justify-center">
        <div className="max-w-md font-sans ">
          <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 bg-clip-text">Welcome Hero
          </h1>
          <p className="mb-5 px-1">
            Show the world who you are and what kind of Hero you are. Then enter the Tavern and check out all the Heroes from around the world.
          </p>
          {/* <div className="text-center hero-content card glass m-auto flex">
          <div className="max-w-md font-sans">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome Hero!
            </h1>
            <p className="mb-5">
              Show the world who you are and what kind of Hero you are. Then enter the Tavern and check out all the Heroes from around the world.
            </p>
            <div className="container flex justify-around">
              <div className="container p-2">
                <Link to="/new">
                  <button className="btn glass">Create a Hero!</button>
                </Link>
                <div class="divider lg:divider-vertical">OR</div> 
                <div className="p-2">
                  <Link to="/Tavern">
                  <button className="btn glass">The Tavern</button>
                  </Link>
              </div>
              </div>
            </div>
          </div>
        </div> */}
          <div class="sm:flex flex-col w-full lg:flex-row">
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><Link to="/new">
              <button className="btn glass">Create a Hero!</button>
            </Link></div>
            <div class="divider lg:divider-vertical">OR</div>
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><Link to="/Tavern">
              <button className="btn glass">The Tavern</button>
            </Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero