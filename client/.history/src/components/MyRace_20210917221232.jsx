
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
    console.log(e.target.value)
  }
  

  return (
    <div>
      <button onClick={(e) => handleClick(e)} value="elf">
       
      </button>
      <button onClick={(e) => handleClick(e)}value="orc">
       
      </button>
      <button onClick={(e) => handleClick(e)} value="halfling">
       
      </button>
      <button onClick={(e) => handleClick(e)} value="human">
      human
      </button>
    </div>
  )
}
