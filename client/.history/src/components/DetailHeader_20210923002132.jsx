import React from 'react'

export const DetailHeader = (props) => {
  const { deets } = props
  
  return (
    <>
      <div class=" text-white leading-tight lg:text-8xl md:text-7xl sm:text-5xl text-3xl">{ deets}</div>
              <div class="text-2xl text-gray-300 hover:text-gray-400 cursor-pointer">
                <h2 class="border-b border-dashed border-gray-500 pb-1">{heroes.fields?.title}</h2></div>
              <h3 className="lg:text-4xl md:text-4xl sm:text-2xl my-6">"{deets}"</h3>
    </>
  )
}
