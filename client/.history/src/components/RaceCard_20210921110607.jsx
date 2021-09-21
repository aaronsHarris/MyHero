import React from 'react'
import { Link } from 'react-router-dom'

export const RaceCard = (props) => {
  const { title, text, value, handleClick, } = props
  
  return (
    <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
          <h2 className="card-title">{title}</h2>
          <p>{text}</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
              <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value={value}>Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}
