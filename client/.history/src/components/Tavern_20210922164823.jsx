import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import axios from "axios";
import { TavernCarrds } from "./TavernCarrds";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Heroes`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const Tavern = () => {
  const [heroes, setHeroes] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchHeroes = async () => {
      const res = await axios.get(URL, config);
      setHeroes(res.data.records)
    };

    fetchHeroes();
  }, [id]);

  if (loading) {
    return <div>loading...</div>
  }


  return (
    <div>
      <TavernCarrds heroes={heroes} />
      
    </div>
  )
}
