
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';



export const MyRace = (props) => {
  const [races, setRaces] = useState([])
  const [heroes, setHeroes] = useState([])
  const { race } = props
  console.log(props)


  return (
    <div>
       <div className="h-screen">
        {races.map((props) => {
          return (
            
        );
        })}
      
      </div> */}
    // </div>
  )
}