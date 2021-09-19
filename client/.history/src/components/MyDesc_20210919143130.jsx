mport axios from "axios";
import { useState } from "react";
import Form from "./Form";

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Teams`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export const MyDesc = () => {
  return (
    <div>
      <Form />
    </div>
  )
}
