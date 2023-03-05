import React from "react";
import { BrowserRouter } from "react-router-dom";

import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/Projects/project";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Introduction />
        <About />
        <Projects />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
