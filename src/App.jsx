import React from "react";

//Components
import Nav from "./components/Nav/Nav";
import BackDrop from "./components/BackDrop/BackDrop";
import Skill from "./components/Skill/Skill";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Nav />
      <BackDrop />
      <Skill />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
