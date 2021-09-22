
import { useHistory } from "react-router-dom";
import { Cards } from "./Cards";



export const MyRace = (props) => {
  const { setRace } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyClass")
    switch (e.target.value) {
      case "":
        setRace("")
        break;
      case "orc":
        setRace("orc")
        break;
      case "halfling":
        setRace("halfling")
        break;
      case "human":
        setRace("human")
        break;
      case "dwarf":
        setRace("dwarf")
        break;
      case "tiefling":
        setRace("tiefling")
        break;
    }
  }

  return (

    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-forest bg-cover overflow-y-auto md:h-screen lg:bg-cover mb-auto">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Choose a Race
      </h1>

      <Cards title="" value="" text="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
      
      <Cards title="orc" value="orc" text="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
      
      <Cards title="Halfling" value="halfling" text="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick}/>

      <Cards title="Human" value="human" text="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
      
      <Cards title="Dwarf" value="dwarf" text="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
      
      <Cards title="Tiefling" value="tiefling" text="Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
      
    </div>
  )
}

