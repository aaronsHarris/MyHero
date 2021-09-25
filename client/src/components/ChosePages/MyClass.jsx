
import { useHistory } from "react-router-dom";
import { Cards } from "../AllCards/Cards";

export const MyClass = (props) => {
  const { setClasses } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyWeapon")
    switch (e.target.value) {
      case "Mage":
        setClasses("Mage")
        break;
      case "Fighter":
        setClasses("Fighter")
        break;
      case "Ranger":
        setClasses("Ranger")
        break;
      case "Rogue":
        setClasses("Rogue")
        break;
      case "Druid":
        setClasses("Druid")
        break;
      case "Cleric":
        setClasses("Cleric")
        break;
        default: setClasses("none")
        break
    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-gradient-to-b from-black via-black to-blue-500 bg-cover overflow-y-auto md:h-screen lg:h-screen">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Choose a Class
      </h1>

      <Cards title="Mage" value="Mage" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Fighter" value="Fighter" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Ranger" value="Ranger" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

        <Cards title="Rogue" value="Rogue" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

        <Cards title="Druid" value="Druid" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
      
      <Cards title="Cleric" value="Cleric" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
    </div>
  )
}

