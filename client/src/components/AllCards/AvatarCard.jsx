import React from 'react'

export const AvatarCard = (props) => {
  const { title, value, handleClick, bg } = props

  // hardwon =  bg-hardwon


  return (
    <div className="flex flex-col items-center px-4 py-10 m-1 hover:-translate-y-5 transform transition">
      <h1 className="card-title text-white text-4xl font-hand">{title}</h1>
      <div className={bg}>
        <div className="max-w-md card-body">
          <div className="card-actions items-center justify-center">
          </div>
        </div>
      </div>
      <button className="font-sans rounded-2xl bg-transparent text-2xl p-3 hover:-translate-y-.5 transform transition hover:bg-red-900" onClick={(e) => handleClick(e)} value={value}>
        Add!</button>
    </div>
  )
}
