
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
        setArmor("fighter")
        break;
      case "ranger":
        setArmor("ranger")
        break;
      case "rogue":
        setArmor("rogue")
        break;
      case "dwarf":
        setArmor("dwarf")
        break;
      case "tiefling":
        setArmor("tiefling")
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
            <h2 class="card-title">Mage</h2>
            <p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.</p>
            <div class="card-actions justify-center">
              <Link to="/MyDesc">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="mage">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">fighter</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="fighter">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Ranger</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="ranger">Submit</button>
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
            <h2 class="card-title">Dwarf</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="dwarf">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Tiefling</h2>
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