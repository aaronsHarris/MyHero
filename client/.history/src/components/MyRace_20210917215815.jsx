
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';



export const MyRace = (props) => {
  const { setRace } = props

  console.log(props)

  return (
    <div>
      {setRace("elf")}
    </div>
  )
}
