import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Nav from "./components/Nav";
import './App.css';
import Aboutme from './components/Aboutme';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  

  return (
    <>
      <Nav/>
      <Aboutme/>
      <Experience/>
      <Work/>
      <Contact/>

    </>
  )
}

export default App
