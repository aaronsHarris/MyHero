import React from 'react'

export const AvatarCard = (props) => {
  const { title, value, handleClick, bg } = props

  // hardwon =  bg-hardwon


  return (
    <div className="flex flex-col items-center px-4 py-10 m-1">
      <h1 className="card-title text-white text-2xl">{title}</h1>
      <div className={bg}>
        <div className="max-w-md card-body">
          <div className="card-actions items-center justify-center">
          </div>
        </div>
      </div>
      <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value={value}>
        Add</button>
    </div>
  )
}
