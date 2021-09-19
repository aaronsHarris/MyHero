import React from 'react'
import { Link } from 'react-router-dom'
export const Form = () => {
  return (
    <div>
      <div className="sm:flex justify-center items-center h-screen w-full bg-parchment lg:bg-no-repeat bg-cover">
      <div className="sm:w-screen lg:w-1/2">
    <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-black w-screen items-center">Description
          </h1>
        <form action="/" method="post">
            <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-2xl text-gray-900" for="first_name">Name</label>
            
                <input className="text-center text-black text-xl input input-ghost" placeholder="Aragorn, Lancelot, Tyrion"type="text" name="first_name" id="first_name"/>
            </div>
            <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-2xl text-gray-900" for="first_name">Title</label>
              
                <input className="text-center text-black text-xl input input-ghost" placeholder="ex: Sir, Madamme,The Great"type="text" name="first_name" id="first_name"/>
            </div>
            <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-2xl text-gray-900" for="first_name">Quote</label>
                <input className="text-center text-black text-xl input input-ghost" placeholder="It's just a flesh wound!" type="text" name="first_name" id="first_name"/>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-2xl text-gray-900" for="password">My Description</label>
                <textarea class="textarea h-24 textarea-ghost text-center" placeholder="As a knight of the kingdom I always fight for the kingdom!"></textarea>
          </div>
          <div className="p-2">
                <Link to="/Tavern">
                  <button className="btn glass text-black">Create</button>
                </Link>
              </div>
        </form>
        
    </div>
</div>
    </div>
  )
}
