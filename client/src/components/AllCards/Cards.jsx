import React from 'react'

export const Cards = (props) => {
  const { title, value, text, handleClick } = props
  return (

    <div className="flex items-center px-4 py-10 m-1 text-white">
      <div className="card glass font-hand  text-2xl lg:card-side text-neutral-content shadow-2xl hover:-translate-y-5 transform transition">
        <div className="max-w-md card-body">
          <h2 className="card-title text-3xl">{title}</h2>
          <p>{text}</p>
          <div className="card-actions justify-center">
            <button className="sm:rounded-2xl bg-red-800 lg:bg-transparent text-2xl p-3 hover:-translate-y-.5 transform transition hover:bg-red-900" onClick={(e) => handleClick(e)} value={value}>ADD</button>
          </div>
        </div>
      </div>
    </div>
  )
}


