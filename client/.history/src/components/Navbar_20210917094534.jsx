import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/create">
      <p>New Character</p>
      </Link>
      <Link to="/Tavern"
   </nav>
  )
}

export default Navbar
