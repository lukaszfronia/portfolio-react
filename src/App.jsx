import { useState } from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className=" bg-gray-200">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
