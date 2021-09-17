
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Splash from "./components/Splash"
import { MyRace } from './components/MyRace';
import MyClass

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
      <Splash />
      </Route>
      <Route path="/MyRace">
        <MyRace />
      </Route>
      <Route path="/MyClass">
        <MyClass />
      </Route>
    </div>
  );
}

export default App;
