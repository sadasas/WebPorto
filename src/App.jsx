import React from "react";
import { BrowserRouter } from "react-router-dom";

import About from "./components/About/About";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/navbar/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Introduction />
        <About />
      </BrowserRouter>
    </>
  );
}

export default App;
