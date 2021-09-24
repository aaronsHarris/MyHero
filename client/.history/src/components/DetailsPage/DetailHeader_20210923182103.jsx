import React from 'react'

export const DetailHeader = (props) => {
  const { name, title, quote } = props

  return (
    <>
      <div className=" text-white leading-tight lg:text-8xl md:text-7xl sm:text-5xl text-3xl">{name}</div>
      <div className="text-2xl text-gray-300 hover:text-gray-400 cursor-pointer">
        <h2 className="border-b border-dashed border-g pb-1">{title}</h2></div>
      <h3 className="lg:text-4xl md:text-4xl sm:text-2xl my-6">"{quote}"</h3>
    </>
  )
}
