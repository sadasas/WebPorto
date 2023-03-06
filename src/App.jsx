import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

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
        <Suspense fallback={<div>loading ....</div>}>
          <Navbar />
        </Suspense>
        <Suspense fallback={<div>loading ....</div>}>
          <Introduction />
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
