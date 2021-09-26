
import { useHistory } from "react-router-dom";
import { Cards } from "../AllCards/Cards";

export const MyArmor = (props) => {
  const { setArmor } = props
  const history = useHistory()


  const handleClick = (e) => {
    e.preventDefault()
    history.push("/MyAvatar")
    switch (e.target.value) {
      case "Robe of Enchantment":
        setArmor("Robe of Enchantment")
        break;
      case "Heavy Armor":
        setArmor("Heavy Armor")
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
      case "Orb of Protection":
        setArmor("Orb of Protection")
        break;
      case "Light Armor":
        setArmor("Light Armor")
        break;
      case "Run Away":
        setArmor("Run Away")
        break;
      default: setArmor("none")
        break
    }
  }

  return (
    <div className="sm:h-screen w-screen flex flex-wrap justify-around items-center bg-gradient-to-b from-black via-black to-blue-500 bg-cover overflow-y-auto">
      <h1 className="font-serif lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-white w-screen">
        Choose your Armor
      </h1>

      <Cards title="Robe of Enchantment" value="Robe of Enchantment" text="You have infused your plain robe with magical runes to protect you or enhance your magical prowess"
        handleClick={handleClick} />

      <Cards title="Heavy Armor" value="Heavy Armor" text="Made of obsedian and netherite. You dare anyone to attempt to pierce your armor."
        handleClick={handleClick} />

      <Cards title="Leather Armor" value="leather-armor" text="After you've taken down a wild beast you tan and stitch together the hide to make a custom piece of protection."
        handleClick={handleClick} />

      <Cards title="Cloak of Hiding" value="cloak" text="With a hood up and concealed hands, you hide your identity from the world until your time to strike."
        handleClick={handleClick} />

      <Cards title="Shirtless" value="no-armor" text="You dont need clad armor to protect you! Your only weakness is the one statement... No Shoes, No Shirt, No Service."
        handleClick={handleClick} />

      <Cards title="Khakis" value="khakis" text="They match your corduroy sweater perfectly. Its style and comfort. Whats not to like?"
        handleClick={handleClick} />
      
      <Cards title="Orb of Protection" value="Orb of Protection" text="You hold this giant orb and speak the magic words as a protection field sorounds you."
        handleClick={handleClick} />
      
      <Cards title="Light Armor" value="Light Armor" text="Move swift, move light. Less weight means more damage. Race across the battlefield with ease."
        handleClick={handleClick} />
      
      <Cards title="Run Away" value="Run Away" text="They can't hit what they can't touch! No one can hurt you as you race home for tea."
        handleClick={handleClick} />
    </div>
  )
}

