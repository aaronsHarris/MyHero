import React from 'react'

export const Dropdown = () => {
  return (
    <div className="grid-rows-4 text-center items">
      <Link to='/' className='p-4'>
        MyHero
      </Link>
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/new">
        Add New
      </Link>
      <Link className="p-4" to="/Tavern">
        Tavern
      </Link>
    </div>
  )
}
