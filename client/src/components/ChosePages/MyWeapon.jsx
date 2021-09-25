
import { useHistory } from "react-router-dom";
import { Cards } from "../AllCards/Cards";

export const MyWeapon = (props) => {
  const { setWeapon } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyArmor")
    switch (e.target.value) {
      case "Sword":
        setWeapon("Sword")
        break;
      case "Bow":
        setWeapon("Bow")
        break;
      case "Staff of Thunderbolts":
        setWeapon("Staff of Thunderbolts")
        break;
      case "Dagger":
        setWeapon("Dagger")
        break;
      case "Sheild":
        setWeapon("Sheild")
        break;
      case "Cutting Words":
        setWeapon("Cutting Words")
        break;
      case "Animal Familiar":
        setWeapon("Animal Familiar")
        break;
      case "War Hammer":
        setWeapon("War Hammer")
        break;
      case "Good Vibes":
        setWeapon("Good Vibes")
        break;
      default: setWeapon("none")
        break
    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-gradient-to-b from-black via-black to-gray-500 bg-cover overflow-y-auto">
      <h1 className="font-serif lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Choose a Weapon
      </h1>

      <Cards title="Sword" value="Sword" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Bow" value="Bow" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Staff of Thunderbolts" value="Staff of Thunderbolts" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Dagger" value="Dagger" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Sheild" value="Sheild" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Cutting Words" value="Cutting words" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="Animal Familiar" value="Animal Familiar" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />

      <Cards title="War Hammer" value="War Hammer" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
      
      <Cards title="Good Vibes" value="Good Vibes" text="erum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        handleClick={handleClick} />
    </div>
  )
}

