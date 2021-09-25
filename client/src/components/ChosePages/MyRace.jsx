
import { useHistory } from "react-router-dom";
import { Cards } from "../AllCards/Cards";



export const MyRace = (props) => {
  const { setRace } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyClass")
    switch (e.target.value) {
      case "Elf":
        setRace("Elf")
        break;
      case "Orc":
        setRace("Orc")
        break;
      case "Halfling":
        setRace("Halfling")
        break;
      case "Human":
        setRace("Human")
        break;
      case "Dwarf":
        setRace("Dwarf")
        break;
      case "Tiefling":
        setRace("Tiefling")
        break;
      case "Dragonborn":
        setRace("Dragonborn")
        break;
      case "Gnome":
        setRace("Gnome")
        break;
      case "Half-Elf":
        setRace("Half-Elf")
        break;
      default: setRace("none")
        break
    }
  }

  return (

    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-gradient-to-b from-black via-black to-red-500 bg-cover overflow-y-auto md:h-screen lg:bg-cover mb-auto">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white font-serif w-screen">
        Choose a Race
      </h1>

      <Cards title="Elf" value="Elf" text="Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world."
        handleClick={handleClick} />

      <Cards title="Orc" value="Orc" text="Orcs are a tribal race of hostile and bestial humanoids. Savage and fearless, orc tribes are ever in search of elves, dwarves, and humans to destroy. Motivated by their hatred of the civilized races."
        handleClick={handleClick} />

      <Cards title="Halfling" value="Halfling" text="The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries."
        handleClick={handleClick} />

      <Cards title="Human" value="Human" text="Humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons."
        handleClick={handleClick} />

      <Cards title="Dwarf" value="Dwarf" text="Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall their pride is boundless"
        handleClick={handleClick} />

      <Cards title="Tiefling" value="Tiefling" text="Horned and demon like humanoids are not greeted kindly, their ancestors made a pact generations ago taht infused the essence of Asmodeus—overlord of the Nine Hells"
        handleClick={handleClick} />

      <Cards title="Dragonborn" value="Dragonborn" text="Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. "
        handleClick={handleClick} />

      <Cards title="Gnome" value="Gnome" text="As far as gnomes are concerned, being alive is a wonderful thing, and they squeeze every ounce of enjoyment out of their three to five centuries of life."
        handleClick={handleClick} />
      <Cards title="Half-Elf" value="Half-Elf" text="Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human."
        handleClick={handleClick} />
    </div>
  )
}

