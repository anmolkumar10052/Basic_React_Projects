import Home from './Home';
import Contact from './Contact';
import About from './About';
import Greeting from './Greeting';

function App() {
  
  return (
    <div>
      <h1>Hello from Reacjs</h1>
      <Home name= {'Anmol'} age ={24} />
      <Contact />
      <Home />
      <About />
      <Greeting name = {'Anmol'} />
      <Greeting name = {'Ayush'} />

    </div>
  );
}

export default App;
