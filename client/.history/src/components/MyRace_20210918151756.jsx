
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';



export const MyRace = (props) => {
  const { setRace } = props

  // useEffect(() => {
  //   setRace("elf")
  // }, [])

  const handleClick = (e) => {
    e.preventDefault()
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
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="card shadow-sm">
      <div>
          <div className="flex flex-row ">
            
        <button onClick={(e) => handleClick(e)} value="elf">
        elf
          </button>
        </div>
      </div>
          
          </div>
      <button onClick={(e) => handleClick(e)} value="orc">
        orc
      </button>
      <button onClick={(e) => handleClick(e)} value="halfling">
        halfling
      </button>
      <button onClick={(e) => handleClick(e)} value="human">
        human
      </button>
      <div class="flex items-center px-4 py-10 bg-cover card bg-base-200">
  <div class="card glass lg:card-side text-neutral-content">
    
    <div class="max-w-md card-body">
      <h2 class="card-title">Glass</h2> 
      <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
      <div class="card-actions">
        <button class="btn glass rounded-full">Get Started</button>
      </div>
    </div>
  </div>
</div>

      </div>
  )
}
