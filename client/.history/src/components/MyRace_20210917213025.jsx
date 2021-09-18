
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';



export const MyRace = (props) => {
  const [races, setRaces] = useState([])
  const { race } = props

  console.log(props)

  return (
    <div>
      <h1>create a hero! pick a race
      </h1>
      <div className="h-screen">
        {/* {races.map((race) => {
          return (
            <h1>{props.race}</h1>
        );
        })} */}
      </div>
    </div>
  )
}
