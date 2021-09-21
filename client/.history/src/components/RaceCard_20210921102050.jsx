import React from 'react'
import { Link } from 'react-router-dom'

export const RaceCard = (props) => {
  const { title, text, value, handleClick } = props
  
  return (
    <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Elf</h2>
            <p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="elf">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}
