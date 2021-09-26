import React from 'react'

export const DetailTitles = (props) => {
  const { title, deets } = props

  return (
    <>
      <h2 className="text-5xl">{title}</h2>
      <div className=" w-36 m-auto">
        <div className="divider m-0"></div>
      </div>
      <h3 className=" text-2xl mb-4 justify-center max-w-2xl">{deets}</h3>
    </>
  )
}
