
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';



export const MyRace = (props) => {
  const [races, setRaces] = useState([])
  const [heroes, setHeroes] = useState([])
  const { setrace } = props

  console.log(props)

  return (
    <div>
      <div className="h-screen">
        {/* {races.map((race) => {
          return (
        console.log(props)
        );
        })} */}
      </div>
    // </div>
  )
}
