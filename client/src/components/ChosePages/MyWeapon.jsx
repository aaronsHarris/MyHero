
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

      <Cards title="Sword" value="Sword" text="An extension of your very being, either Long, short, rapier, or flaming, you live and die by the sword."
        handleClick={handleClick} />

      <Cards title="Bow" value="Bow" text="You feel the tension, the grain on the wood, and the wind against your back as you let an arrow fly into your prey. "
        handleClick={handleClick} />

      <Cards title="Staff of Thunderbolts" value="Staff of Thunderbolts" text="Cast in an Arcane Forge you hurl the power of the elements at any being or monster that dares enter your path."
        handleClick={handleClick} />

      <Cards title="Dagger" value="Dagger" text="Light and balanced, silent and hidden. You conceal it from the world until a throat needs slitting or a gut needs wrenching."
        handleClick={handleClick} />

      <Cards title="Sheild" value="Sheild" text="The best offense is a good defense. Rather than cut your foes down, you protect your friends from any power that would casue you harm."
        handleClick={handleClick} />

      <Cards title="Cutting Words" value="Cutting words" text="Vicous mockery or hideous laughter, and even the power to kill in a single word. You are the master of verbal abuse. "
        handleClick={handleClick} />

      <Cards title="Animal Familiar" value="Animal Familiar" text="You have formed a bond with this magical creature. It hails your call to attack all that oppose you."
        handleClick={handleClick} />

      <Cards title="War Hammer" value="War Hammer" text="You dont need a pointy stick or spells. You smash, bang, and crush your enemies to a pulp."
        handleClick={handleClick} />
      
      <Cards title="Good Vibes" value="Good Vibes" text="You just hang out and make sure everybodies doing good. You usually bring snacks and are down for whatever."
        handleClick={handleClick} />
    </div>
  )
}

