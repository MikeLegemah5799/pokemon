import './App.css';
import './styles/normalize.css';
import './styles/breakpoints.css';
import logo from './poke-logo.jpg';
import Pokegame from './Pokegame';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Pokemon Logo" className="logo" />
      <Pokegame />
    </div>
  );
}

export default App;
