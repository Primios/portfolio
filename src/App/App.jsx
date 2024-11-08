/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: App.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 02/06/2023
*/

import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Experiences from "../Pages/Experiences";
import Chatbox from "../Pages/Chatbox";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
      <Chatbox />
    </>
  );
}

export default App;
