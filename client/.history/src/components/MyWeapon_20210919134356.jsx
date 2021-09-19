
import { Link, useHistory } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';

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
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Sword</h2>
            <p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.</p>
            <div class="card-actions justify-center">
              <Link to="/MyArmor">
                <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="sword">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Bow</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyArmor">
                <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="bow">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Staff of Thunderbolts</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyArmor">
                <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="staff-of-thunderbolts">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Dagger</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyArmor">
                <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="dagger">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Sheild</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyArmor">
                <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="sheild">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Verbal Abuse</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyArmor">
                <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="verbal-abuse">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

{