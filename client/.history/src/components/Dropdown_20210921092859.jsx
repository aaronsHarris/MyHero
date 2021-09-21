import React from 'react'

export const Dropdown = () => {
  return (
    <div>
      <Link to='/' className='pl-8 text-2xl'>
        MyHero</Link>
    <div className="px-4 cursor-pointer md:hidden">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
    </div>
    <div className="pr-8 md:block hidden">
      <Link className="p-4" to="/">Home</Link>
      <Link className="p-4" to="/new">Add New</Link>
      <Link className="p-4" to="/Tavern">Tavern</Link>
    </div>
  )
}
