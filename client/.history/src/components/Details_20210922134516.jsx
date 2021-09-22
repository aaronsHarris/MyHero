import { useParams, Link } from 'react-router-dom'
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
      console.log(res.data)
    };

    fetchRecipes();
  }, [id]);
  if (loading) {
    return <div>loading...</div>
  }
  return (

    // <div class="hero min-h-screen bg-base-200 bg-tavern">
    //   <div class="flex-col hero-content lg:flex-row-reverse">
    //     <img src={heroes.fields?.avatar} className="max-w-sm rounded-xl shadow-2xl" />
    //     <div>
    //       <h1 class="mb-5 text-5xl font-bold">
    //         {heroes.fields?.name}
    //       </h1>
    //       <h3 className="italic card-title text-xl">{heroes.fields?.title}</h3>
    //       <div>
    //       <h3 className="text-lg">"{heroes.fields?.quote}"</h3>
    //       <h3 className=" text-lg">{heroes.fields?.race}</h3>
    //       <h3>{heroes.fields?.classes}</h3>
    //       <h3>{heroes.fields?.weapon}</h3>
    //       <h3>{heroes.fields?.armor}</h3>
    //       <h3>{heroes.fields?.algignmentx}</h3>
    //         <p className="mb-5">{heroes.fields?.info}</p>
    //       <Link to="/Tavern">
    //         <button class="btn btn-primary">Go back</button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="card shadow-xl image-full">
    <figure>
      <img src={heroes.fields?.avatar} className="lg: max-w-screen-md"/>
    </figure> 
    <div class="justify-end card-body">
      <h2 class="card-title">Image overlay</h2> 
      <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
      <div class="card-actions">
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div> 
  )

}
