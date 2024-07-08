import Benefits from './views/Benefits';
import Contact from './views/Contact';
import Home  from './views/Home';
import HowWeWork from './views/HowWeWork'
import Services from './views/Services';
import './App.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Services/>
      <HowWeWork/>
      <Benefits/>
      <Contact/>
    </div>
  );
}

export default App;
