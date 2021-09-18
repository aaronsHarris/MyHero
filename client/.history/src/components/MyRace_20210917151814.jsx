import { useEffect, useState } from "react";
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
  const [heroes, setHeroes] = useState("")
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchHeroes = async () => {
      const res = await axios.get(URL, config);
      setHeroes(res.data.records)
      console.log(res.data.records)
    };

    fetchHeroes();
  }, [id]);

  if (loading) {
    return <div>loading...</div>
  }
  console.log(heroes)
  return (
    <div>
      <div>
        {/* {heroes.map((hero) => {
          return (
            <h3>{hero.fields?.race}</h3>
          );
        })} */}
      </div>
    </div>
  )
}
