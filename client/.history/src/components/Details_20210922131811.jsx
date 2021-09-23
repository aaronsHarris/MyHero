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


    // <div className=" sm:min-h-screen w-screen flex flex-col justify-top items-center bg-tavern bg-cover overflow-y-auto lg:bg-no-repeat min-h-screen mb-auto bg-center">
    //   <div className="card lg:card-side bordered m-6 min-h-screen min-w-">
    //     <div className="card-body">
    //       <h2 className="card-title text-5xl">{heroes.fields?.name}</h2>
    //       <h3 className="italic card-title text-xl">{heroes.fields?.title}</h3>
    //       <h3 className="text-lg">"{heroes.fields?.quote}"</h3>
    //       <img className="max h-64 max w-52" src={heroes.fields?.avatar} alt="avatars" />
    //       <h3 className=" text-lg">{heroes.fields?.race}</h3>
    //       <h3>{heroes.fields?.classes}</h3>
    //       <h3>{heroes.fields?.weapon}</h3>
    //       <h3>{heroes.fields?.armor}</h3>
    //       <h3>{heroes.fields?.algignmentx}</h3>
    //       <p>{heroes.fields?.info}</p>

    //   </div>
    // </div>
    // </div>
    <div class="hero min-h-screen bg-base-200">
      <div class="flex-col hero-content lg:flex-row-reverse">
        <img src={heroes.fields?.avatar} class="max-w-sm rounded-lg shadow-2xl"/>
        <div>
        <h1 class ="mb-5 text-5xl font-bold">
        {heroes.fields?.name}
        </h1>
        <p class ="mb-5">
        Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button class ="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>

  )

}