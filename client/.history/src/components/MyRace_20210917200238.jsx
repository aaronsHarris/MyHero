
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';



export const MyRace = (props) => {
 const [race, setRaces] = useState([])

  return (
    <div> 
      {/* <div className="h-screen">
        {heroes.map((hero) => {
          return (
            <h3>{hero.fields?.race}</h3>
          );
        })}
      </div> */}
    </div>
  )
}
