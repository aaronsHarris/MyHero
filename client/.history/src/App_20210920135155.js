
import './App.css';
import Navbar from './components/Navbar';
import Splash from "./components/Splash"
import { MyRace } from './components/MyRace';
import { MyClass } from './components/MyClass';
import { MyWeapon } from './components/MyWeapon';
import { MyArmor } from './components/MyArmor';
import { MyAvatar } from './components/MyAvatar';
import { MyDesc } from './components/MyDesc'
import { Tavern } from "./components/Tavern";
import { Details } from './components/Details';
import { Footer } from './components/Footer';
import { useState, useEffect } from 'react';
import { useParams, Route } from 'react-router';
import axios from "axios";


const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/Heroes`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

function App() {
  const [race, setRace] = useState("")
  const [classes, setClasses] = useState("")
  const [weapon, setWeapon] = useState("")
  const [armor, setArmor] = useState("")
  const [avatar, setAvatar] = useState("")
  // const [description, setDescription] = useState("")

  return (
    <div className="text-center my-0 h-screen w-screen">
      <Navbar />
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
          avatar

        />
      </Route>
      <Route path="/Tavern">
        <Tavern />
      </Route>
      <Route path="Details">
        <Details />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
