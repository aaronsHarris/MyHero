import { Logo } from '../Logo';
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
    return <div><Logo /></div>
  }

  return (
    <div className="sm:min-w-screen min-h-screen flex justify-center items-center bg-black text-white font-hand lg:bg-tavern bg-no-repeat bg-cover overflow-y-auto">

      <div className="sm:grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 ">

        <div className="p-3 row-span-2 col-span-1">
          <img className="rounded-lg shadow-lg" src={heroes.fields?.avatar} alt="avatar" />
        </div>

        <div className="p-3 col-span-2">
          <DetailHeader
            name={heroes.fields?.name}
            title={heroes.fields?.title}
            quote={heroes.fields?.quote} />
        </div>
        <div className="p-3">
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
        <div className="p-3"><DetailTitles
          title="Weapon"
          deets={heroes.fields?.weapon} />
          <DetailTitles
            title="Armor"
            deets={heroes.fields?.armor}
          />
          <DetailTitles
            title="Creator"
            deets={heroes.fields?.creator}
          />
        </div>
        <div className="col-span-3 row-span-2 px-3 mx-auto">
          <DetailTitles
            title="Info"
            deets={heroes.fields?.info} />
        </div>
        <Link to="/Tavern" className="col-span-3">
          <button className="btn glass mx-auto col-span-3 mb-24 justify-self-auto hover:-translate-y-.5 transform transition hover:bg-red-900">Go Back</button>
        </Link>
      </div>
    </div>
  )
}



