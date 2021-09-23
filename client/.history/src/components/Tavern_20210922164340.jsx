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
    <div className=" sm:min-h-screen w-screen flex flex-col justify-top items-center bg-tavern bg-cover overflow-y-auto lg:bg-no-repeat min-h-screen mb-auto">
    <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 bg-clip-text text-transparent bg-gradient-to-r from-black to-green-300">
      The Tavern
    </h1>
    {/* <Details heroes={heroes} /> */}
      <TavernCarrds heroes={heroes} />
      </div>
    
  )
}
