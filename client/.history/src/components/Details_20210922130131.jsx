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
      <img className="max h-64" src={hero.fields?.avatar} alt="avatars" />
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
