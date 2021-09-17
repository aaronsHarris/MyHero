import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800  shadow">
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/create">
      <p>New Character</p>
      </Link>
      <Link to="/Tavern">
      <p>The Tavern</p>
      </Link>
   </nav>
  )
}

export default Navbar
