import React from "react";
import { BrowserRouter } from "react-router-dom";

import About from "./components/About/About";
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
      </BrowserRouter>
    </>
  );
}

export default App;
