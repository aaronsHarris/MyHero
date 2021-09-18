
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';



export const MyRace = (props) => {
  const [races, setRaces] = useState({})
  const [heroes, setHeroes] = useState([])
  const { race } = props


  return (
    <div>
      {/* <div className="h-screen">
        {heroes.map((hero) => {
          return (
        <h3>{heroes.fields?.race}</h3>
        );
        })} */}h
      
      </div>
    // </div>
  )
}
