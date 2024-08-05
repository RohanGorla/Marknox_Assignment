import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
