import axios from "axios";
import { useState } from "react";
import { Form } from "./Form"

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Heroes`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const MyDesc = (props) => {
  const {race, classes, weapon, armor } = props
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [quote, setQuote] = useState("")
  const [alignment, setAlignment] = useState("")
  const [info, setInfo] = useState("")
  const 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      race,
      classes,
      weapon,
      armor,
      name,
      title,
      quote,
      alignment,
      info,
    };
      console.log(fields)
    const res = await axios.post(URL, { fields }, config);
    console.log("myDesc line 33", res.data);
  };
  return (
    <div>
      <Form
        name={name}
        setName={setName}
        title={title}
        setTitle={setTitle}
        quote={quote}
        setQuote={setQuote}
        alignment={alignment}
        setAlignment={setAlignment}
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
        type={"Create"}
      />
    </div>
  )
}
