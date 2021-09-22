
import { useHistory } from "react-router-dom";
import { Cards } from "./Cards";

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
      case "":
        setClasses("")
        break;
      case "rogue":
        setClasses("rogue")
        break;
      case "druid":
        setClasses("druid")
        break;
      case "cleric":
        setClasses("cleric")
        break;
    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-fire bg-cover overflow-y-auto md:h-screen lg:h-screen">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Choose a Class
      </h1>

      <Cards title="Mage" value="Mage" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Fighter" value="Fighter" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Ranger" value="" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

        <Cards title="Rogue" value="rogue" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

        <Cards title="Druid" value="druid" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
      
      <Cards title="Cleric" value="cleric" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
    </div>
  )
}

