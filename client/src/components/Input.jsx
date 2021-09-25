
import React from 'react'

export const Input = (props) => {
const {title, deets, holder, changer} = props

  return (
    <div className="flex flex-col mb-4 justify-center items-center">
      <label className="mb-2 font-bold text-2xl text-gray-200">{title}</label>
      <input className="text-center w-7/12 text-gray-200 bg-gray-500 text-xl input input-acsent input-bordered"
        placeholder={holder}
        type="text"
        value={deets}
        onChange={changer}
    />
  </div>
  )
}
