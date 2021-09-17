
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Splash from "./components/Splash"
import { MyRace } from './components/MyRace';
import { MyClass } from './components/MyClass';
import { MyWeapon } from './components/MyWeapon';
import { MyArmor } from './components/MyArmor';

function App() {
  return (
    <div className="App">
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
      <MyArmor
      <Route>

      </Route>
    </div>
  );
}

export default App;
