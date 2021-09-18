
import './App.css';
import Navbar from './components/Navbar';
import { Splash } from "./components/Splash"
import { MyRace } from './components/MyRace';
import { MyClass } from './components/MyClass';
import { MyWeapon } from './components/MyWeapon';
import { MyArmor } from './components/MyArmor';
import { MyAvatar } from './components/MyAvatar';
import { MyDesc } from './components/MyDesc'
import { Tavern } from "./components/Tavern";
import { Details } from './components/Details';
import { Footer } from './components/Footer';
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [races, setRaces] = useState("")
  const [classes, setClasses] = useState("")
  const [weapons, setWeapons] = useState("")
  const [armors, setArmors] = useState("")
  const [avatars, setAvatars] = useState("")
  const [descriptions, setDescriptions] = useState("")
  const [heroes, setHeroes] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  
  useEffect(() => {
    const fetchHeroes = async () => {
      const res = await axios.get(URL, config);
      setHeroes(res.data.records)
      console.log(res.data)
    };

    fetchHeroes();
  }, [id]);

  if (loading) {
    return <div>loading...</div>
  }
  return (
    <div className="text-center my-0">
      <Navbar />
      <Route exact path="/">
        <Splash />
      </Route>
      <Route path="/new">
        <MyRace Setraces={setRaces}/>
      </Route>
      <Route path="/MyClass">
        <MyClass />
      </Route>
      <Route path="/MyWeapon">
        <MyWeapon />
      </Route>
      <Route path="/MyArmor">
        <MyArmor />
      </Route>
      <Route path="/MyAvatar">
        <MyAvatar />
      </Route>
      <Route path="MyDesc">
        <MyDesc />
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
