import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

const About = React.lazy(() => import("./components/About/About"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Navbar = React.lazy(() => import("./components/navbar/Navbar"));
const Projects = React.lazy(() => import("./components/Projects/project"));

import "@/styles/index.scss";
import PageLoader from "./components/loaders/PageLoader";

function App() {
  //

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <BrowserRouter>
          <Navbar />
          <About />
          <Projects />
          <Contact />
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={0}
            outerStyle={{
              border: "3px solid #4942E4",
            }}
            innerStyle={{
              backgroundColor: "#4942E4",
            }}
          />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
