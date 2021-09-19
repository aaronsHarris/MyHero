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
    <div class="sm:flex justify-center items-center h-screen w-full bg-parchment lg:bg-no-repeat bg-cover">
    <div class="w-1/2 p-8 m-4">
    <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen flex items-center">
      Description
      </h1>
        <form action="/" method="post">
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-2xl text-gray-900" for="first_name">Name</label>
                <input class="text-center text-black text-xl input input-ghost" type="text" name="first_name" id="first_name"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="last_name">Last Name</label>
                <input class="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="email">Email</label>
                <input class="border py-2 px-3 text-grey-800" type="email" name="email" id="email"/>
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="password">Password</label>
                <input class="border py-2 px-3 text-grey-800" type="password" name="password" id="password"/>
            </div>
            <button class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Account</button>
        </form>
        <a class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900" href="/login">Already have an account?</a>
    </div>
</div>
  )
}