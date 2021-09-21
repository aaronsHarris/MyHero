import { Link } from "react-router-dom"

export const Dropdown = () => {
  return (
    <div className={isOpen}
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
