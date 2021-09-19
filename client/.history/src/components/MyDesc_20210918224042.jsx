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
    <div className="sm:flex justify-center items-center h-screen w-full bg-parchment lg:bg-no-repeat bg-cover">
      <div className="w-1/2 p-8 m-4">
    <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-black w-screen flex items-center">Description
          </h1>
        <form action="/" method="post">
            <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-2xl text-gray-900" for="first_name">Name</label>
            
                <input className="text-center text-black text-xl input input-ghost" type="text" name="first_name" id="first_name"/>
            </div>
            <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-2xl text-gray-900" for="first_name">Title</label>
              <h3 className="text-black">ex: Sir, Madamme,The Great</h3>
                <input className="text-center text-black text-xl input input-ghost" type="text" name="first_name" id="first_name"/>
            </div>
            <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-2xl text-gray-900" for="first_name">Quote</label>
                <input className="text-center text-black text-xl input input-ghost" placeholder=""type="text" name="first_name" id="first_name"/>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-bold text-2xl text-gray-900" for="password">My Description</label>
                <textarea class="textarea h-24 textarea-ghost text-center" placeholder="As a knight of the kingdom i always fight for the kingdom!"></textarea>
          </div>
            <button className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Account</button>
        </form>
        
    </div>
</div>
  )
}