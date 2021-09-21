import React from 'react'
import { Link } from 'react-router-dom'

export const Form = (props) => {
  return (
    <div>
      <div className="sm:flex flex-col flex-wrap justify-center items-center h-screen w-full bg-parchment overflow-auto lg:bg-no-repeat bg-cover">
        <div className="sm:w-screen lg:w-1/2">
          <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-black  items-center">Description
          </h1>
          <form onSubmit={props.handleSubmit}>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-2xl text-gray-900">Name</label>
              <input className="text-center text-black text-xl input input-ghost"
                placeholder="Aragorn, Lancelot, Tyrion"
                type="text"
                value={props.name}
                onChange={(e) => props.setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-2xl text-gray-900">Title</label>
              <input className="text-center text-black text-xl input input-ghost"
                placeholder="ex: Sir, Madamme,The Great"
                type="text"
                value={props.title}
                onChange={(e) => props.setTitle(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-2xl text-gray-900">Quote</label>
              <input className="text-center text-black text-xl input input-ghost"
                placeholder="It's just a flesh wound!"
                type="text"
                value={props.quote}
                onChange={(e) => props.setQuote(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-2xl text-gray-900">Alignment</label>
              <input className="text-center text-black text-xl input input-ghost"
                placeholder="It's just a flesh wound!"
                type="text"
                value={props.alignment}
                onChange={(e) => props.setAlignment(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-2xl text-gray-900">My Description</label>
              <textarea className="textarea h-24 textarea-ghost text-center"
                placeholder="As a knight for the kingdom I always fight for the kingdom!"
                type="text"
                value={props.info}
                onChange={(e) => props.setInfo(e.target.value)}>
              </textarea>
            </div>
            <div className="p-2">

              <button className="btn glass text-black">{props.type}</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
