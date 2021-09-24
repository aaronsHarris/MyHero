import { getByTitle } from '@testing-library/react'
import React from 'react'

export const Input = (props) => {
const {title, deets, holder, changer} = props

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 font-bold text-2xl text-gray-900">{title}</label>
      <input className="text-center text-black text-xl input input-ghost border-b"
        placeholder={holder}
        type="text"
        value={deets}
        onChange={changer}
    />
  </div>
  )
}
