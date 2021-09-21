
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import { WeaponCard } from "./WeaponCard";

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
      <WeaponCard title="Sword" value="sword" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <WeaponCard title="Bow" value="bow" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
      
     <WeaponCard />
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Dagger</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">

              <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="dagger">Submit</button>

            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Sheild</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">

              <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="sheild">Submit</button>

            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Verbal Abuse</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">

              <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="verbal-abuse">Submit</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

