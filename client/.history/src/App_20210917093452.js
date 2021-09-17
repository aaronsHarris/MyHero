
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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
