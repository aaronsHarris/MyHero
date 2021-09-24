import axios from "axios";
import { useState } from "react";
import { Form } from "../Form"
import { useHistory } from "react-router";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Heroes`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const MyDesc = (props) => {
  const { race, classes, weapon, armor, avatar } = props
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [quote, setQuote] = useState("")
  const [alignment, setAlignment] = useState("")
  const [info, setInfo] = useState("")
  const [creator, setCreator] = useState("")
  const history = useHistory()

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
      avatar,
      creator,
    };
    // eslint-disable-next-line
    const res = await axios.post(URL, { fields }, config);
    history.push("/Tavern")
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
        creator={creator}
        setCreator={setCreator}
        type={"Create"}
      />
    </div>
  )
}
