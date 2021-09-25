import React from 'react'

export const Cards = (props) => {
  const { title, value, text, handleClick } = props
  return (
    
    <div className="flex items-center px-4 py-10 m-1">
      <div className="card glass lg:card-side text-neutral-content shadow-2xl hover:-translate-y-5 transform transition">
        <div className="max-w-md card-body">
          <h2 className="card-title">{title}</h2>
          <p>{text}</p>
          <div className="card-actions justify-center">
            <button className=" rounded-2xl bg-transparent text-2xl p-3 hover:-translate-y-.5 transform transition hover:bg-red-900" onClick={(e) =>
              handleClick(e)} value={value}>Add!</button>
          </div>
        </div>
      </div>
    </div>
  )
}


