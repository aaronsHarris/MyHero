
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
      <div>
        <p>elf</p>
      </div>
      <div>
        <p>orc</p>
      </div>
      <div>
        <p>halfling</p>
      </div>
      <div>
        <p>elf</p>
      </div>
    </div>
  )
}