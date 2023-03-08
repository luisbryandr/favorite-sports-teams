/* Styles import here */ 
import './App.css';

/* Importing dependencies / libraries here */
 /* Import components  */
import Header from './components/Header';
import Team from './components/Team';

//I could make this 

function App() {
  return (
    <div className="App">
     <Header />
     <Team />
     {/* I could use map to render a Team component for each team in an arra above,first hardcoded based on my favorite teams, later still my favorite teams but based on my list in my database.
     I would prop drill the team name which will give that query info to other components to use it as they need it
     mainly fixtures for upcomin games component*/}
    </div>
  );
}

export default App;
