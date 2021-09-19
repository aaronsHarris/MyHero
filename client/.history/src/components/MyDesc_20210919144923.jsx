import { Link, useHistory} from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';
import { Form } from "./Form";
export const MyDesc = (props) => {
  const { setArmor } = props
  const history = useHistory()
  

  

  return (
    <div>
      <Form />
    </div>
  )
}