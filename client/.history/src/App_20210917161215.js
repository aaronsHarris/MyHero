

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
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Navbar />
      <Route exact path="/">
        <Splash />
      </Route>
      <Route path="/new">
        <MyRace />
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
