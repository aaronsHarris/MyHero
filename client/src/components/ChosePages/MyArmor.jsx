
import { useHistory } from "react-router-dom";
import { Cards } from "../AllCards/Cards";

export const MyArmor = (props) => {
  const { setArmor } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyAvatar")
    switch (e.target.value) {
      case "robe":
        setArmor("robe")
        break;
      case "heavy-armor":
        setArmor("heavy-armor")
        break;
      case "leather-armor":
        setArmor("leather-armor")
        break;
      case "cloak":
        setArmor("cloak")
        break;
      case "no-armor":
        setArmor("no-armor")
        break;
      case "khakis":
        setArmor("khakis")
        break;
      default: setArmor("none")
        break
    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-gradient-to-b from-black via-black to-blue-500 bg-cover overflow-y-auto">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Choose your Armor
      </h1>

      <Cards bg-image="" title="Robe" value="robe" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Heavy Armor" value="heavy-armor" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Leather Armor" value="leather-armor" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Cloak" value="cloak" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Shirtless" value="no-armor" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Khakis" value="khakis" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
    </div>
  )
}

