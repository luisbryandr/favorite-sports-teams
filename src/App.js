/* Styles import here */ 
import './App.css';

/* Importing dependencies / libraries here */
 /* Import components  */
import Home from './components/Home';

const App = () => {

  return (
    <div className="App">
     
     <Home />
     {/* I could use map to render a Team component for each team in an array above,first hardcoded based on my favorite teams, later still my favorite teams but based on my list my db or state.
     I would prop drill the team name which will give that query info to other components to use it as they need it mainly fixtures for upcomin games component*/}
    </div>
  );
}

export default App;
