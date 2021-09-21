import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({toggle}) => {
  return (
    <nav className='flex justify-between items-center h-16 bg-base-300 text-white sticky top-0 shadow-lg font-sans z-10' role='navigation'>
    <Link to='/' className='pl-8 text-2xl'>MyHero</Link>
      <div className="px-4 cursor-pointer md:hidden"
      onClick={toggle}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
    </div>
    <div className="pr-8 md:block hidden">
      <Link className="p-4" to="/">Home</Link>
      <Link className="p-4" to="/new"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg></Link>
      <Link className="p-4" to="/Tavern">Tavern</Link>
    </div>
  </nav>
  )
}

export default Navbar
