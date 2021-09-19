
import { Link, useHistory} from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';




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
    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-forest bg-cover">
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Elf</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="elf">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Orc</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="orc">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Halfling</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="halfling">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Human</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="elf">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Elf</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="elf">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Elf</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions">
              <Link to="/MyClass">
              <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="elf">Submit</button>
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