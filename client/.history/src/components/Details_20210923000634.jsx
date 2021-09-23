import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import { DetailTitles } from './DetailTitles';

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
    const fetchHeroes = async () => {
      const res = await axios.get(`${URL}/${id}`, config);
      setHeroes(res.data);
      setLoading(false)
      console.log(res.data)
    };

    fetchHeroes();
  }, [id]);
  if (loading) {
    return <div>loading...</div>
  }
  return (
    <div class="w-screen h-screen bg-tavern flex flex-row flex-wrap p-3 overflow-y-auto">
      <div class="my-auto mx-auto w-2/3">

        <div class="rounded-lg shadow-lg  w-full flex flex-row flex-wrap p-3 antialiased">

          <div class="md:w-1/3 w-full lg: mt-20">
            <img class="rounded-lg shadow-lg antialiased" src={heroes.fields?.avatar} />
          </div>
          <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
            <div class="w-full text-center  font-semibold relative pt-3 md:pt-0">
              <div class=" text-white leading-tight lg:text-8xl md:text-7xl sm:text-5xl text-3xl">{heroes.fields?.name}</div>
              <div class="text-2xl text-gray-300 hover:text-gray-400 cursor-pointer">
                <h2 class="border-b border-dashed border-gray-500 pb-1">{heroes.fields?.title}</h2></div>
              <h3 className="lg:text-4xl md:text-4xl sm:text-2xl my-6">"{heroes.fields?.quote}"</h3>


              <DetailTitles title="Alignment" deets={heroes.fields?.alignment}/>

              <DetailTitles title="Race" deets/>
              


              <h2 className="text-3xl">Class</h2>
              <div className=" w-36 m-auto">
                <div class="divider m-0"></div>
              </div>
              <h3 className=" text-lg mb-4">{heroes.fields?.classes}</h3>

              <h2 className="text-3xl">Race</h2>
              <div className=" w-36 m-auto">
                <div class="divider m-0"></div>
              </div>
              <h3 className=" text-lg">{heroes.fields?.weapon}</h3>
              <h2 className="text-3xl">Race</h2>
              <div className=" w-36 m-auto">
                <div class="divider m-0"></div>
              </div>
              <h3 className=" text-lg">{heroes.fields?.armor}</h3>
              <h2 className="text-3xl">Race</h2>
              <div className=" w-36 m-auto">
                <div class="divider m-0"></div>
              </div>
              <p className="mx-auto overflow-ellipsis text-lg">{heroes.fields?.info}</p>

              <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">Last Seen: <b>2 days ago</b></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )

}


{/* <div class="justify-center card-body max-w-md m-auto">
        <h2 class="card-title text-7xl mb-2">{heroes.fields?.name}</h2>
        <h3 className="italic card-title text-3xl">{heroes.fields?.title}</h3>
        <div className="">
          <div class="divider m-0"></div>
          <h3 className="text-2xl my-6">"{heroes.fields?.quote}"</h3>
          <h3 className="sm:text-2xl font-serif">Race</h3>
          <div className=" w-36 m-auto">
            <div class="divider m-0"></div>
          </div>
          <h3 className=" mb-5 text-lg">{heroes.fields?.race}</h3>
          
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
      </div> */}