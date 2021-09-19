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
      qutoe,
      alignment,
      mascot,
      roster,
    };

  return (
    <div>
    <Form />
    </div>
  )
}
