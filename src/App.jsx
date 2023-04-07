import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
const About = React.lazy(() => import("./components/About/About"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Introduction = React.lazy(() =>
  import("./components/Introduction/Introduction")
);
const Navbar = React.lazy(() => import("./components/navbar/Navbar"));
const Projects = React.lazy(() => import("./components/Projects/project"));

import "./index.css";

function App() {
  return (
    <>
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
        <Suspense fallback={<div>loading ....</div>}>
          <Navbar />
        </Suspense>
        <Suspense fallback={<div>loading ....</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>loading ....</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div>loading ....</div>}>
          <Contact />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
