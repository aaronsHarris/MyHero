import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
const Navbar = ({ toggle }) => {
  return (
    <nav className='flex justify-between items-center h-16 bg-base-300 text-white sticky top-0 shadow-lg font-sans z-10' role='navigation'>
      <Link to='/' className=' lg:pl-20 text-3xl'>MyHero</Link>
      <div className="pl-56">
      <Logo />
      </div>
      <div className="px-4 cursor-pointer md:hidden"
        onClick={toggle}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </div>

      <div className="px-8 md:block hidden">
        <Link className="p-4 text-2xl" to="/">Home</Link>
        <Link className="p-4 text-2xl" to="/new">Add New</Link>
        <Link className="p-4 text-2xl" to="/Tavern">Tavern</Link>
      </div>
    </nav>
  )
}

export default Navbar
