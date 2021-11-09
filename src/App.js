import Navigation from './Nav';
import Home from "./Home";
import About from "./About";
import How from "./How";
import Services from "./Services";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <How />
      <Services />
    </div>
  );
}

export default App;
