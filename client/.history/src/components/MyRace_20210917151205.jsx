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
  const [heroes, setHeroes] = useState("")
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchHeroes = async () => {
      const res = await axios.get(URL, config);
      setHeroes(res.data.records)
      console.log(res.data.records)
    };
  
    fetchHeroes();
  }, []);

  return (
    <div>
    <div>
      {heroes.map((hero) => {
        return (
          <Link to={`/heroes/${hero.id}`} key={hero.id}>
            <h3>{hero.fields?.race}</h3>
          </Link>
        );
      })}
    </div>
  </div>
  )
}
