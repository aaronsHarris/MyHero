
import { Link } from "react-router-dom";
import { useParams } from 'react-router'
import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Heroes`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

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
