import React from 'react'

export const MyRace = () => {
  return (
    
    <div className="bg bg-red-500">
      <div>Create a new Character</div>
      <div>MyRace</div>
      <div className=" lg:grid grid-cols-2 gap-2 mx-auto justify-items-center mb-4">
        <div className="relative bg-black shadow-lg rounded-lg group h-64 w-64 flex justify-center items-center">
          <div className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out">
          </div>
          <p className="font-bold text-lg text-white absolute z-20 pointer-events-none">
            Video Graphics
          </p>
        </div>
        <div className="relative bg-black shadow-lg rounded-lg group h-64 w-64 flex justify-center items-center">
          <div className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out">
          </div>
          <p className="font-bold text-lg text-white absolute z-20 pointer-events-none">
            Video Graphics
          </p>
        </div>
        <div className="relative bg-black shadow-lg rounded-lg group h-64 w-64 flex justify-center items-center">
          <div className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out">
          </div>
          <p className="font-bold text-lg text-white absolute z-20 pointer-events-none">
            Video Graphics
          </p>
        </div>
        <div className="relative bg-black shadow-lg rounded-lg group h-64 w-64 flex justify-center items-center">
          <div className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out">
          </div>
          <p className="font-bold text-lg text-white absolute z-20 pointer-events-none">
            Video Graphics
          </p>
        </div>
      </div>
    </div>
  )
}
