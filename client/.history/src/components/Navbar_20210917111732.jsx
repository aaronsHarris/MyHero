import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">
          DaisyUI
        </span>
      </div>
      <div className="flex-none hidden px-2 mx-2 lg:flex">
        <div className="flex items-stretch">
          <a className="btn btn-ghost btn-sm rounded-btn">
            Home

          </a>
          <a className="btn btn-ghost btn-sm rounded-btn">
            
            Add Hero

          </a>
          <a className="btn btn-ghost btn-sm rounded-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 mr-2 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
            </svg>
            Files

          </a>
          <a className="btn btn-ghost btn-sm rounded-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 mr-2 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            Config

          </a>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

  )
}

export default Navbar