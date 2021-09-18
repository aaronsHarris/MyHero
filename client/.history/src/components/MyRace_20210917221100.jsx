
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';



export const MyRace = (props) => {
  const { setRace } = props

  useEffect(() => {
    setRace("elf")
  }, [])

  const handleClick=(e)
  

  return (
    <div>
      <button onClick={(e) => handleClick(e)} value="elf">
        <p>elf</p>
      </button>
      <button onClick={(e) => handleClick(e)}value="orc">
        <p>orc</p>
      </button>
      <button onClick={(e) => handleClick(e)} value="halfling">
        <p>halfling</p>
      </button>
      <button onClick={(e) => handleClick(e)} value="human">
        <p>human</p>
      </button>
    </div>
  )
}
