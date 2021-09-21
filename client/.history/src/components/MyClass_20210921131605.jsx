
import { Link, useHistory } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import { Cards } from "./Cards";

export const MyClass = (props) => {
  const { setClasses } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyWeapon")
    switch (e.target.value) {
      case "mage":
        setClasses("mage")
        break;
      case "fighter":
        setClasses("fighter")
        break;
      case "ranger":
        setClasses("ranger")
        break;
      case "rogue":
        setClasses("rogue")
        break;
      case "druid":
        setClasses("druid")
        break;
      case "cleric":
        setClasses("cleric")
        break;
    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-fire bg-cover overflow-y-auto md:h-screen lg:h-screen">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Choose a Class
      </h1>

      <Cards title="Mage" value="mage" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Fighter" value="fighter" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Ranger" value="ranger" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

        <Cards title="Rogue" value="rogue" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

        <Cards title="Druid" value="druid" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
      
      <car
    </div>
  )
}

