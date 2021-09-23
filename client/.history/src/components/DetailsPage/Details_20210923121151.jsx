import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import { DetailTitles } from './DetailTitles'
import { DetailHeader } from './DetailHeader';
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
    <div className="min-w-screen min-h-screen bg-tavern overflow-y-auto flex justify-center items-center">
      <div className="sm:grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 ">
        <div className=" bg-red-500 p-3 row-span-2 col-span-1"> <img className="rounded-lg shadow-lg" src={heroes.fields?.avatar} /></div>
        <div className=" bg-blue-500 p-3 col-span-2"><DetailHeader
          name={heroes.fields?.name}
          title={heroes.fields?.title}
          quote={heroes.fields?.quote} /></div>
        <div className=" bg-green-500 p-3"><DetailTitles
          title="Alignment"
          deets={heroes.fields?.alignment} />
          <DetailTitles
            title="Race"
            deets={heroes.fields?.race} />
          <DetailTitles
            title="Class"
            deets={heroes.fields?.classes} />
        </div>
        <div className=" bg-yellow-500  p-3"><DetailTitles
          title="Weapon"
          deets={heroes.fields?.weapon} />
          <DetailTitles
            title="Armor"
            deets={heroes.fields?.armor} />
        </div>
        <div className=" bg-black col-span-3 px-3">
          <DetailTitles
            title="Info"
            deets={heroes.fields?.info} /></div>
      </div>
    </div>
  )
}



{/* <div className="my-auto mx-auto w-2/3">
        <div className="rounded-lg shadow-lg  w-full flex flex-row flex-wrap p-3 antialiased">
          <div className="md:w-1/3 w-full lg: mt-20">
            <img className="rounded-lg shadow-lg antialiased bg-yellow-500" src={heroes.fields?.avatar} />
          </div>
          <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
            <div className="w-full text-center  font-semibold relative pt-3 md:pt-0">
              <div className="container bg-red-500">
              <DetailHeader
                name={heroes.fields?.name}
                title={heroes.fields?.title}
                  quote={heroes.fields?.quote} />
              </div>
              <div className="container bg-blue-500">
              <DetailTitles
                title="Alignment"
                deets={heroes.fields?.alignment} />
              <DetailTitles
                title="Race"
                deets={heroes.fields?.race} />
              <DetailTitles
                title="Class"
                  deets={heroes.fields?.classes} />
              </div>
              <div className="container bg-green-700">
              <DetailTitles
                title="Weapon"
                deets={heroes.fields?.weapon} />
              <DetailTitles
                title="Armor"
                  deets={heroes.fields?.armor} />
              </div>
              <div className="container bg-purple-600">
              <DetailTitles
                title="Info"
                  deets={heroes.fields?.info} />
                </div>

              <div className="text-lg text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0  right-0">Created by: <h2 className="text-3xl">Creator</h2></div>
              <Link to="/Tavern">
                <button className="btn"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
              </Link>
            </div>
          </div>
        </div>

      </div> */}