import { Link } from "react-router-dom"

export const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div className="drawer drawer-side">
      <div className={
        isOpen ? " drawer drawer-side grid grid-rows-3 text-center items-center bg-base-200" : "hidden"
      }
        onClick={toggle}>
        <div className=>
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
      </div>
    </div >
  )
}
