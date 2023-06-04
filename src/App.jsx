import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

const About = React.lazy(() => import("./components/About/About"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Navbar = React.lazy(() => import("./components/navbar/Navbar"));
const Projects = React.lazy(() => import("./components/Projects/project"));

import "@/styles/index.scss";
import Loader from "./components/Loader";
import Tes from "./components/3d/Tes";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
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
