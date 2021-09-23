import React from 'react'

export const DetailTitles = (props) => {
  const { title, deets } = props

  return (
    <>
      <h2 className="text-3xl">{title}</h2>
      <div className=" w-36 m-auto">
        <div className="divider m-0"></div>
      </div>
      <h3 className=" text-lg mb-4">{deets}</h3>
    </>
  )
}
