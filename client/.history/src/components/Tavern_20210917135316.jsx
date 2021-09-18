import React from 'react'

export const Tavern = () => {
  return (
    <div className="bg-red-500 h-screen flex flex-col justify-top items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white">
        The Tavern
      </h1>
      <div className="p-8">
        <div className="relative bg-black shadow-lg rounded-lg group h-64 w-64 flex justify-center items-center">
          <div class="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out" style="background-image: url('')">
          </div>
          <p class="font-bold text-lg text-white absolute z-20 pointer-events-none">
            Video Graphics
          </p>
        </div>
      </div>
    </div>
  )
}
