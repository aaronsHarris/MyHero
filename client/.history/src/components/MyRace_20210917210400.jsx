
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';



export const MyRace = (props) => {
  const [races, setRaces] = useState([])
  const [heroes, setHeroes] = useState([])
  const { race } = props
  console.log(r)


  return (
    <div>
      {/* <div className="h-screen">
        {races.map((race) => {
          return (
        );
        })}
      
      </div> */}
    // </div>
  )
}
