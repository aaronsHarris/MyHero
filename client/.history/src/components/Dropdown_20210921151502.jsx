import { Link } from "react-router-dom"

export const Dropdown = ({ isOpen, toggle }) => {
  return (
    <d>
      <div className={
        isOpen ? " drawer drawer-side  bg-base-200" : "hidden"
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
    </div >
  )
}


// grid grid-rows-3 text-center items-center