import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Recipes`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const MyRace = () => {

  useEffect(() => {
    const fetchHeroes = async () => {
      const res = await axios.get(URL, config);
      console.log(res.data)
    };
  
    fetchRecipes();
  }, []);

  return (
    <div>
      <div>Create a new Character</div>
      <div>MyRace</div>
    </div>
  )
}
