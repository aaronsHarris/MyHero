
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
      
      case "orc":
        setRace("orc")
        break;
      case "halfling":
        setRace("halfling")
        break;
      case "human":
        setRace("human")
        break;
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center content-between">
      <div className="container">
      <div>
        <div  className="p-20 card bg-base-200">
        <button className="btn glass" onClick={(e) => handleClick(e)} value="elf">
        elf
          </button>
          </div>
          </div>
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
      </div>
  )
}
