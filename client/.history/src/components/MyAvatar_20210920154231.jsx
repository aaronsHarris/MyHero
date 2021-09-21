
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
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632162349/dovekin_orpxro.png")
        break;
      case "image-2":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632164831/elfLady_owkkwe.png")
        break;
      case "image-3":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632165423/hadwon_gyxf2y.png")
        break;
      case "image-4":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632167815/bev_0_ky0v3m.png")
        break;
      case "image-5":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632167870/moonshine_vnrcdl.png")
        break;
      case "image-6":
        setAvatar("https://res.cloudinary.com/dbdrox2p9/image/upload/v1632168086/riz-gukgak_sba45t.png")
        break;
    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-row justify-around items-center bg-avatar bg-cover">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Pick an Avatar
      </h1>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card bg-dovekin bg-no-repeat bg-cover h-64 w-64 lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Tough</h2>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="image-1">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Brave</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="image-2">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Hero</h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
            <div className="card-actions justify-center">
              <Link to="/MyClass">
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="image-3">Submit</button>
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
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="image-4">Submit</button>
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
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="image-5">Submit</button>
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
                <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="image-6">Submit</button>
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