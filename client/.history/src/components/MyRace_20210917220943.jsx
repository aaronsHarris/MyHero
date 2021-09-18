
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';



export const MyRace = (props) => {
  const { setRace } = props

  useEffect(() => {
    setRace("elf")
  }, [])

  

  return (
    <d>
      <button onClick={(e) => handleClick(e)}>
        <p>elf</p>
      </button>
      <button onClick={(e) => handleClick(e)}>
        <p>orc</p>
      </button>
      <button onClick={(e) => handleClick(e)}>
        <p>halfling</p>
      </button>
      <button onClick={(e) => handleClick(e)}>
        <p>human</p>
      </button>
    </button>
  )
}
