import { useState, useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";

function App() {
  const ProjectsRef = useRef(null);
  const HomeRef = useRef(null);
  const ContactRef = useRef(null);
  const SkillRef = useRef(null);

  return (
    <div>
      <Navbar
        ProjectsRef={ProjectsRef}
        HomeRef={HomeRef}
        ContactRef={ContactRef}
      />
      <Home ref={HomeRef} SkillRef={SkillRef} />
      {/* <Skills ref={SkillRef}/> */}
      <Projects ref={ProjectsRef} />
      <Footer ref={ContactRef} />
    </div>
  );
}

export default App;
