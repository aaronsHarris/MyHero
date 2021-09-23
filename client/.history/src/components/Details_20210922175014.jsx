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
    <div class="sm: justify-center card h-screen w-screen image-full bg-tavern bg-cover  bg-no-repeat overflow-y-auto">
      <figure>
        <img src={heroes.fields?.avatar} className="lg: max-w-screen" />
      </figure>
      <div class="justify-center card-body max-w-md m-auto">
        <h2 class="card-title text-7xl mb-2">{heroes.fields?.name}</h2>
        <h3 className="italic card-title text-2xl">{heroes.fields?.title}</h3>
        <div className="">
          <div class="divider m-0"></div>
          <h3 className="sm:text-2xl mb-4 font-serif">Quote</h3>
          <h3 className="text-lg">"{heroes.fields?.quote}"</h3>
          <h3 className="sm:text-2xl font-serif">Class</h3>
          <div className=" w-36 m-auto">
            <div class="divider m-0"></div>
          </div>
          <h3 className=" text-lg">{heroes.fields?.race}</h3>
          
          <h3 className="sm:text-2xl font-serif">Class</h3>
          <div className=" w-36 m-auto">
            <div class="divider m-0"></div>
          </div>
          <h3 className="mb-5 text-lg">{heroes.fields?.classes}</h3>
          
          <h3 className="sm:text-2xl font-serif">Weapon</h3>
          <div className=" w-36 m-auto">
            <div class="divider m-0"></div>
          </div>
          <h3 className="mb-5 text-lg">{heroes.fields?.weapon}</h3>

          <h3 className="sm:text-2xl font-serif">Armor</h3>
          <div className=" w-36 m-auto">
            <div class="divider m-0"></div>
          </div>
          <h3 className="mb-5 text-lg">{heroes.fields?.armor}</h3>

          <h3 className="sm:text-2xl font-serif">Alignment</h3>
          <div className=" w-36 m-auto">
            <div class="divider m-0"></div>
          </div>
          <h3 className="mb-5 text-lg">{heroes.fields?.alignment}</h3>

          <h3 className="sm:text-2xl font-serif">Description</h3>
          <div className=" w-36 m-auto">
            <div class="divider m-0"></div>
          </div>
          <p className="mb-5 overflow-ellipsis text-lg">{heroes.fields?.info}</p>

          <Link to="/Tavern">
            <button class="btn glass">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  )

}
