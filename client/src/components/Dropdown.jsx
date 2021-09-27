import { Link } from "react-router-dom"

export const Dropdown = ({ isOpen, toggle }) => {
  return (

    <div className={
      isOpen ? "drawer bg-red-900 transition ease-in duration-700 sm:text-white" : "hidden"
    }
      onClick={toggle}>

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


// grid grid-rows-3 text-center items-center