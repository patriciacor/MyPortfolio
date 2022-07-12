import {Fragment} from "react";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/Skills/skills";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
function App() {
  return (
   <Fragment>
   <Intro/>
   <About/> 
   <Projects/>
   <Skills/>
   <Contact/>
   <Footer/>
   </Fragment>
  );
}

export default App;
