import React from 'react'

export const Dropdown = () => {
  return (
    <div>
      <Link to='/' className='pl'>
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
