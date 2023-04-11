import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

const About = React.lazy(() => import("./components/About/About"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Navbar = React.lazy(() => import("./components/navbar/Navbar"));
const Projects = React.lazy(() => import("./components/Projects/project"));

import "./index.scss";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <AnimatedCursor
            color="255,255,255"
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={0}
            outerStyle={{
              border: "3px solid var(--cursor-color)",
            }}
            innerStyle={{
              backgroundColor: "var(--cursor-color)",
            }}
          />
          <Navbar />
          <About />
          <Projects />
          <Contact />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
