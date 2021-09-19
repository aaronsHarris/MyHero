
import { Link, useHistory } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';

export const MyClass = (props) => {
  const { setClass } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyWeapon")
    switch (e.target.value) {
      case "mage":
        setClass("mage")
        break;
      case "fighter":
        setClass("fighter")
        break;
      case "ranger":
        setClass("ranger")
        break;
      case "rogue":
        setClass("rogue")
        break;
      case "druid":
        setClass("druid")
        break;
      case "cleric":
        setClass("cleric")
        break;
    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-fire bg-cover overflow-y-auto md:h-screen lg:h-screen">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Choose a Class
      </h1>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Mage</h2>
            <p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.</p>
            <div className="card-actions justify-center">
              <Link to="/MyWeapon">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="mage">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Fighter</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">
              <Link to="/MyWeapon">
                <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="fighter">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div classf="flex items-center px-4 py-10 m-1">
        <div classf="card glass lg:card-side text-neutral-content">
          <div classf="max-w-md card-body">
            <h2 classf="card-title">Ranger</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div classf="card-actions justify-center">
              <Link to="/MyWeapon">
                <button classf="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="ranger">Submit</button>
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
              <Link to="/MyWeapon">
                <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="rogue">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Druid</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyWeapon">
                <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="druid">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center px-4 py-10 m-1">
        <div class="card glass lg:card-side text-neutral-content">
          <div class="max-w-md card-body">
            <h2 class="card-title">Cleric</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div class="card-actions justify-center">
              <Link to="/MyWeapon">
                <button class="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="cleric">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

