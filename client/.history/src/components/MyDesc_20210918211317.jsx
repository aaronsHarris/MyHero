import { Link, useHistory} from "react-router-dom";
import { useParams } from 'react-router'
import { useState, useEffect } from 'react';

export const MyDesc = (props) => {
  const { setArmor } = props
  const history = useHistory()
  

  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyDesc")
    // switch (e.target.value) {
    //   case "mage":
    //     setArmor("mage")
    //     break;
    //   case "fighter":
    //     setArmor("fighter")
    //     break;
    //   case "ranger":
    //     setArmor("ranger")
    //     break;
    //   case "rogue":
    //     setArmor("rogue")
    //     break;
    //   case "dwarf":
    //     setArmor("dwarf")
    //     break;
    //   case "tiefling":
    //     setArmor("tiefling")
    //     break;
    // }
  }

  return (
    
  )
}