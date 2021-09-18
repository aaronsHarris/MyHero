
import { Link } from "react-router-dom";
import { useParams } from 'react-router'




export const MyRace = () => {
 

  return (
    <div>
      <div className="h-screen">
        {heroes.map((hero) => {
          return (
            <h3>{hero.fields?.race}</h3>
          );
        })}
      </div>
    </div>
  )
}
