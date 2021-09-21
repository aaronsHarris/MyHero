import React from 'react'

export const WeaponCard = (props) => {
  const {title, value, text, handleClick} = props
  return (
    <div className="flex items-center px-4 py-10 m-1">
        <div className="card glass lg:card-side text-neutral-content">
          <div className="max-w-md card-body">
            <h2 className="card-title">Sword</h2>
            <p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.</p>
            <div className="card-actions justify-center">

              <button className="btn glass rounded-lg" onClick={(e) => handleClick(e)} value="sword">Submit</button>

            </div>
          </div>
        </div>
      </div>
  )
}
