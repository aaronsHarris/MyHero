import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
const Navbar = ({ toggle }) => {
  return (
    <nav className='font-hand flex justify-between items-center h-16 bg-base-300 text-white sticky top-0 shadow-lg z-10 w-screen' role='navigation'>
      <Link to='/' className=' lg:pl-20 text-3xl font-maven hover:text-red-800'>MyHero</Link>
      <div className="md:pl-56 sm:text-white">
      <Logo />
      </div>
      <div className="px-4 cursor-pointer md:hidden"
        onClick={toggle}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </div>

      <div className="px-8 md:block  font-maven hidden">
        <Link className="p-4 text-2xl hover:text-red-800" to="/">Home</Link>
        <Link className="p-4 text-2xl hover:text-red-800" to="/new">Add New</Link>
        <Link className="p-4 text-2xl hover:text-red-800" to="/Tavern">Tavern</Link>
      </div>
    </nav>
  )
}

export default Navbar
