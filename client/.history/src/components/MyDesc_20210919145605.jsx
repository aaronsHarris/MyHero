import axios from "axios";
import { useState } from "react";
import { Form } from "./Form"

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Teams`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const MyDesc = () => {
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [quote, setQuote] = useState("")
  const [alignment, setAlignment] = useState("")
  const [info, setInfo] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      title,
      quote,
      alignment,
      info,
    };

    const res = await axios.post(URL, { fields }, config);
    console.log(res.data);
  };
  return (
    <div>
      <Form
        name={name}
        setName={setName}
        name={name}
        setName={setName}
      />
    </div>
  )
}
