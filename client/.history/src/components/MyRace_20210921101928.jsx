
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import { RaceCard } from "./RaceCard";




export const MyRace = (props) => {
  const { setRace } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyClass")
    switch (e.target.value) {
      case "elf":
        setRace("elf")
        break;
      case "orc":
        setRace("orc")
        break;
      case "halfling":
        setRace("halfling")
        break;
      case "human":
        setRace("human")
        break;
      case "dwarf":
        setRace("dwarf")
        break;
      case "tiefling":
        setRace("tiefling")
        break;
    }
  }

  return (

    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-forest bg-cover overflow-y-auto md:h-screen lg:bg-cover mb-auto">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Choose a Race
      </h1>
      <RaceCard elf/>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Orc</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="orc">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Halfling</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="halfling">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Human</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="human">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Dwarf</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="dwarf">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Tiefling</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="tiefling">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

{/* <button onClick={(e) => handleClick(e)} value="orc">
  orc
</button>
<button onClick={(e) => handleClick(e)} value="halfling">
  halfling
</button>
      <button onClick={(e) => handleClick(e)} value="elf">
        elf
      </button>
<button onClick={(e) => handleClick(e)} value="human">
  human
</button> */}