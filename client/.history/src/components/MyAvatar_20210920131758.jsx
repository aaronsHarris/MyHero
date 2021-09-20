
import { Link, useHistory } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';

export const MyAvatar = (props) => {
  const { setAvatar } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyDesc")
    switch (e.target.value) {
      case "image-1":
        setAvatar("mage-1")
        break;
      case "fighter":
        setAvatar("fighter")
        break;
      case "ranger":
        setAvatar("ranger")
        break;
      case "rogue":
        setAvatar("rogue")
        break;
      case "dwarf":
        setAvatar("dwarf")
        break;
      case "tiefling":
        setAvatar("tiefling")
        break;
    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-avatar bg-cover">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Pick an Avatar
      </h1>
      {/* <div classNme="p-20 bg-cover card bg-base-200" style="background-image:">
        <button className="btn glass">Glass button</button>
      </div> */}
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">fighter</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="fighter">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Ranger</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="ranger">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Rogue</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="rogue">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Dwarf</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="dwarf">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Tiefling</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="tiefling">Submit</button>
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