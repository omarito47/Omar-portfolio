import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Frameworks from "./components/Frameworks";
import SideProjects from "./components/SideProject";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="frameworks"><Frameworks /></section>
      <section id="sideprojects"><SideProjects /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
