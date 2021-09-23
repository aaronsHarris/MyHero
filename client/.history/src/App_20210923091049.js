
import './App.css';
import Navbar from './components/Navbar';
import { Dropdown } from './components/Dropdown';
import Splash from "./components/Splash"
import { MyRace } from './components/ChosePages/MyRace';
import { MyClass } from './components/ChosePages/MyClass';
import { MyWeapon } from './components/ChosePages/MyWeapon';
import MyArmor from './components/'
import { MyDesc } from './components/ChosePages/MyDesc'
import { Tavern } from "./components/Tavern";
import { Details } from './components/DetailsPage/Details';
import { Footer } from './components/Footer';
import { useState, useEffect } from 'react';
import { Route } from 'react-router';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [race, setRace] = useState("")
  const [classes, setClasses] = useState("")
  const [weapon, setWeapon] = useState("")
  const [armor, setArmor] = useState("")
  const [avatar, setAvatar] = useState("")

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('i resized here')
      }
    }
    window.addEventListener('resize', hideMenu)
  })
  return (
    <div className="text-center my-0 h-screen w-screen">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Route exact path="/">
        <Splash />
      </Route>
      <Route path="/new">
        <MyRace setRace={setRace} />
      </Route>
      <Route path="/MyClass">
        <MyClass setClasses={setClasses} />
      </Route>
      <Route path="/MyWeapon">
        <MyWeapon setWeapon={setWeapon} />
      </Route>
      <Route path="/MyArmor">
        <MyArmor setArmor={setArmor} />
      </Route>
      <Route path="/MyAvatar">
        <MyAvatar setAvatar={setAvatar} />
      </Route>
      <Route path="/MyDesc">
        <MyDesc
          race={race}
          classes={classes}
          weapon={weapon}
          armor={armor}
          avatar={avatar}
        />
      </Route>
      <Route path="/Tavern">
        <Tavern />
      </Route>
      <Route path="/Details/:id">
        <Details />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
