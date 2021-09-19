
import { Link, useHistory} from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';

export const MyArmor = (props) => {
  const { setArmor } = props
  const history = useHistory()
  

  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyDesc")
    switch (e.target.value) {
      case "robe":
        setArmor("robe")
        break;
      case "heavy-armor":
        setArmor("heavy-armor")
        break;
      case "leather-armor":
        setArmor("leather-armor")
        break;
      case "cloak":
        setArmor("cloak")
        break;
      case "no-armor":
        setArmor("no-armor")
        break;
      case "khakis":
        setArmor("khakis")
        break;
    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-armor bg-cover overflow-y-auto">
       <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Choose your Armor
      </h1>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Robe of Mana</h2>
            <p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.</p>
            <div class="card-actions justify-center">
              <Link to="/MyDesc">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="mana">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Heavy Armor</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="heavy-armor">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Cloak of hiding</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="cloak">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Rogue</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="rogue">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">No Armor</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="no-armor">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Kahkis</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="tiefling">Submit</button>
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
<button onClick={(e) => handleClick(e)} value="ranger">
  ranger
</button> */}