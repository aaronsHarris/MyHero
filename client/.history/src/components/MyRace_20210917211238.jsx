
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';



export const MyRace = (props) => {
  const [races, setRaces] = useState([])
  const { Race } = props

  console.log(props)

  return (
    <div>
      <div className="h-screen">
        {races.map((race) => {
          return (
            <h1>{setRace.props.race}</h1>
        );
        })}
      </div>
    // </div>
  )
}
