import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Recipes`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

useEffect(() => {
  const fetchRecipes = async () => {
    const res = await axios.get(URL, config);
    console.log(res.data)
  };

  fetchRecipes();
}, []);
export const MyRace = () => {
  return (
    <div>
      <div>Create a new Character</div>
      <div>MyRace</div>
    </div>
  )
}
