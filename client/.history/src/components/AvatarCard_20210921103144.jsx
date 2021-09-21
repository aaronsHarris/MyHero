import React from 'react'

export const AvatarCard = () => {
  const { title, value, handleclick } = props
  return (
    <div className="flex flex-col items-center px-4 py-10 m-1">
      <h1 className="card-title text-white text-2xl">{title}</h1>
        <div className="card bg-hardwon bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <div className="card-actions items-center justify-center">
            </div>
          </div>
        </div>
        <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="a">
          Add</button>
      </div>
  )
}
