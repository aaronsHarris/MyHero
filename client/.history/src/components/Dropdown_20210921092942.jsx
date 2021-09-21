import React from 'react'

export const Dropdown = () => {
  return (
    <div>
      <Link to='/' className='pl-8 text-2xl'>
        MyHero
      </Link>
    </div>
    <div className="pr-8 md:block hidden">
      <Link className="p-4" to="/">Home</Link>
      <Link className="p-4" to="/new">Add New</Link>
      <Link className="p-4" to="/Tavern">Tavern</Link>
    </div>
  )
}
