
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

      <RaceCard title="elf" value="elf" text="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
      <RaceCard title="orc" value="orc" text="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
      <RaceCard title="Halfling" value="halfling" text="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick}
      />
      <RaceCard title="Human" value="human" text="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick}/>
      <RaceCard title="Dwarf" value="dwarf" text="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick}/>
      <RaceCard title="Tiefling" value="tiefling" text="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
      handleClick
    </div>
  )
}

