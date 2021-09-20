import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import axios from "axios";
import { Details } from "./Details";

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
      console.log("Tavern.js line  23", res.data)
    };

    fetchHeroes();
  }, [id]);

  if (loading) {
    return <div>loading...</div>
  }


  return (
    <
    // <div className=" sm:min-h-screen w-screen flex flex-col justify-top items-center bg-tavern bg-cover overflow-y-auto lg:bg-no-repeat min-h-screen mb-auto">
    //   <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white">
    //     The Tavern
    //   </h1>
    //   {heroes.map((hero) => {
    //     return (
    //       <>
    //         <div class="card lg:card-side bordered max-w-2xl m-6">
    //           <img src="https://picsum.photos/id/1005/400/250" />
    //           <div class="card-body">
    //             <h2 class="card-title">{hero.fields?.name}</h2>
    //             <p>{hero.fields?.info}</p>
    //             <div class="card-actions justify-center">
    //               <button class="btn glass">More Info</button>
    //             </div>
    //           </div>
    //         </div>

    //       </>
    //     );
    //   })}
    // </div>
    <Details heroes={heroes}/>
  )
}
