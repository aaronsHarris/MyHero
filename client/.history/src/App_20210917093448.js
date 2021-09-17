
import './App.css';
import { Route } from 'react-router-dom';

import Splash from "./components/Splash"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Splash />
    </div>
  );
}

export default App;
