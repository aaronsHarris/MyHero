
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
          <div className="flex flex-col ">
            
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
      <div class="card-body">
    <h2 class="card-title">shadow, center, padding</h2> 
    <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
    <div class="justify-center card-actions">
      <button class="btn btn-outline btn-accent">More info</button>
    </div>
  </div>
      </div>
  )
}
