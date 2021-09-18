
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';



export const MyRace = (props) => {
  const { setRace } = props

  // useEffect(() => {
  //   setRace("elf")
  // }, [])

  const handleClick = (e) => {
    e.preventDefault()
    switch (e.target.value) {
      case "elf":
        setRace("elf")
        break;
      case "elf":
        setRace("elf")
        break; case "elf":
        setRace("elf")
        break; case "elf":
        setRace("elf")
        break;
    }
  }

  return (
    <div>
      <button onClick={(e) => handleClick(e)} value="elf">
        elf
      </button>
      <button onClick={(e) => handleClick(e)} value="orc">
        orc
      </button>
      <button onClick={(e) => handleClick(e)} value="halfling">
        halfling
      </button>
      <button onClick={(e) => handleClick(e)} value="human">
        human
      </button>
    </div>
  )
}
