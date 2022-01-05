import React from "react";
import "./App.css";
import Header from "./Componets/Header/Header";
import Main from "./Componets/Main/Main";
import Skils from "./Componets/Skills/Skills";
import Projects from "./Componets/MyProjects/MyProjects";
import Slogan from "./Componets/Slogan/Slogan";
import Contacts from "./Componets/Contacts/Contacts";
import Footer from "./Componets/Footer/Footer";
import particlesOpts from "./Particles/Particles";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <Particles className={"particles"} params={particlesOpts} />
      <Header />
      <Main />
      <Skils />
      <Projects />
      <Slogan />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
