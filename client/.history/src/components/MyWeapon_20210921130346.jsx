
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import { WeaponCard } from "./WeaponCard";
import { Cards } from "./Cards";
export const MyWeapon = (props) => {
  const { setWeapon } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyArmor")
    switch (e.target.value) {
      case "sword":
        setWeapon("sword")
        break;
      case "bow":
        setWeapon("bow")
        break;
      case "staff-of-thunderbolts":
        setWeapon("staff-of-thunderbolts")
        break;
      case "dagger":
        setWeapon("dagger")
        break;
      case "sheild":
        setWeapon("sheild")
        break;
      case "verbal-abuse":
        setWeapon("verbal-abuse")
        break;
    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-weapon bg-cover overflow-y-auto">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Choose a Weapon
      </h1>
      
      <Cards title="Sword" value="sword" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Bow" value="bow" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Card title="Staff of Thunderbolts" value="staff-of-thunderbolts" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <WeaponCard title="Dagger" value="dagger" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <WeaponCard title="Sheild" value="sheild" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <WeaponCard title="Verbal abuse" value="verbal-abuse" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={ handleClick}/>
    </div>
  )
}

