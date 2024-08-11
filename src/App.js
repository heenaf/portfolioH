
import About from "./Components/About";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialLinks from "./Components/SocialLinks";
import Contact from "./Components/Contact";
import Projects from './Components/Projects';


function App() {
  return (
  <div>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Experience/>
    <Contact/>
    <SocialLinks/>
  </div>
  );
}

export default App;
