import "./App.css";
import { Contact } from "./components/contact";
import { Linkedin } from "./components/linkedin";
import { Projects } from "./components/projects";
import { Experience } from "./components/expirence";
import { Skills } from "./components/skills";
import { Navbar } from "./components/nav";

function App() {
  return (
    <>
      <Navbar />
      <Contact />
      <Linkedin />
      <Projects />
      <Experience />
      <Skills />
    </>
  );
}

export default App;
