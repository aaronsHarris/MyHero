import { useParams } from 'react-router'
import { useEffect, useState } from "react";
import axios from 'axios';


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Heroes`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};
export const Details = () => {
  const [heroes, setHeroes] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()


  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get(`${URL}/${id}`, config);
      setHeroes(res.data);
      setLoading(false)
      // history.push("/recipes/:id")
      console.log(res.data)
    };

    fetchRecipes();
  }, [id]);
  if (loading) {
    return <div>loading...</div>
  }
  return (
    <div>
      <>
      <div className=" sm:min-h-screen w-screen flex flex-col justify-top items-center bg-tavern bg-cover overflow-y-auto lg:bg-no-repeat min-h-screen mb-auto bg-center">
      <div className="card lg:card-side bordered m-6 ">
              <img className="max h-64" src={hero.fields?.avatar} alt="avatars" />
              <div className="card-body">
                <h2 className="card-title text-5xl">{hero.fields?.name}</h2>
                <h3 className="italic card-title text-xl">{hero.fields?.title}</h3>
                <h3 className="text-lg">"{hero.fields?.quote}"</h3>
      <img className="max h-64" src={heroes.fields?.avatar} alt="avatars" />
        <h3>{heroes.fields?.race}</h3>
        <h3>{heroes.fields?.classes}</h3>
        <h3>{heroes.fields?.weapon}</h3>
        <h3>{heroes.fields?.armor}</h3>
        <h3>{heroes.fields?.algignmentx}</h3>
        <p>{heroes.fields?.info}</p>
      </>
    </div>
          )
          
}
