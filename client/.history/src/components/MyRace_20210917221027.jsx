
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';



export const MyRace = (props) => {
  const { setRace } = props

  useEffect(() => {
    setRace("elf")
  }, [])

  

  return (
    <div>
      <button onClick={(e) => handleClick(e)} value="elf">
        <p>elf</p>
      </button>
      <button onClick={(e) => handleClick(e)}value="orc">
        <p>orc</p>
      </button>
      <button onClick={(e) => handleClick(e)} value>
        <p>halfling</p>
      </button>
      <button onClick={(e) => handleClick(e)}>
        <p>human</p>
      </button>
    </div>
  )
}
