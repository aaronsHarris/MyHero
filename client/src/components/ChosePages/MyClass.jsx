
import { useHistory } from "react-router-dom";
import { Cards } from "../AllCards/Cards";

export const MyClass = (props) => {
  const { setClasses } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyWeapon")
    switch (e.target.value) {
      case "Wizard":
        setClasses("Wizared")
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
      case "Sorceror":
        setClasses("sorceror")
        break;
      case "Bard":
        setClasses("Bard")
        break;
      case "Paladin":
        setClasses("Paladin")
        break;
      default: setClasses("none")
        break
    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-gradient-to-b from-black via-black to-yellow-200 bg-cover overflow-y-auto md:h-screen lg:h-screen">
      <h1 className="font-serif lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Choose a Class
      </h1>

      <Cards title="Wizard" value="Wizard" text="Wizards are supreme magic-users, defined and united as a class by the spells they cast. A scholar capable of manipulating the structures of reality."
        handleClick={handleClick} />

      <Cards title="Fighter" value="Fighter" text="Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, and use a bow."
        handleClick={handleClick} />

      <Cards title="Ranger" value="Ranger" text="Warriors of the wilderness, Rangers specialize in hunting the monsters that threaten the edges of civilization; beasts, terrible giants, and deadly dragons. "
        handleClick={handleClick} />

      <Cards title="Rogue" value="Rogue" text="Many Rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment. They are the tricksters of the land."
        handleClick={handleClick} />

      <Cards title="Druid" value="Druid" text="Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity and adopt animal forms."
        handleClick={handleClick} />

      <Cards title="Cleric" value="Cleric" text="ivine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects."
        handleClick={handleClick} />

      <Cards title="Sorceror" value="Sorceror" text="A spellcaster who draws on inherent magic from a gift or bloodline. Some sorcerers wield magic that springs from an ancient bloodline infused with the magic of dragons."
        handleClick={handleClick} />
      
      <Cards title="Bard" value="Bard" text="Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds."
        handleClick={handleClick} />
      
      <Cards title="Paladin" value="Paladin" text="A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk."
      handleClick={handleClick} />
    </div>
  )
}

