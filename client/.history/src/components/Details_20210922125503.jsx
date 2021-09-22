import { useParams } from 'react-router'
import { useEffect, useState } from "react";
import axios from 'axios';


export const Details = () => {
  const { id } = useParams()


  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get(`${URL}/${id}`, config);
      setRecipes(res.data);
      setLoading(false)
      // history.push("/recipes/:id")
    };

    fetchRecipes();
  }, [id]);
  if (loading) {
    return <div>loading...</div>
  }
  return (
    <div>
      {/* <>
        <h3>{hero.fields?.race}</h3>
        <h3>{hero.fields?.classes}</h3>
        <h3>{hero.fields?.weapon}</h3>
        <h3>{hero.fields?.armor}</h3>
        <h3>{hero.fields?.algignmentx}</h3>
        <p>{hero.fields?.info}</p>
      </> */}
    </div>
  )
}
