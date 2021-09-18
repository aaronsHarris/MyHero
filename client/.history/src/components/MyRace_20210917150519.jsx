import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  const [race, setRace] = useState("")
  useEffect(() => {
    const fetchHeroes = async () => {
      const res = await axios.get(URL, config);
      setRace(res.data.records)
      console.log(res.data.records)
    };
  
    fetchHeroes();
  }, []);

  return (
    <div>
    <div>
      {.map((recipe) => {
        return (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
            <h3>{recipe.fields?.title}</h3>
          </Link>
        );
      })}
    </div>
  </div>
  )
}
