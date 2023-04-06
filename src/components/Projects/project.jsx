import React from "react";
import styles from "./project.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Content } from "./Content";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h1>Projects</h1>

      <Content
        title="TCL App"
        description="Ecommerce with simplicity and clean design "
        tag={["web", "react", "redux"]}
        link={[
          {
            img: "/github.png",
            href: "https://github.com/sadasas/TCL/",
            content: "Source Code",
          },
          {
            img: "/web.png",
            href: "https://tcl-eight.vercel.app/",
            content: "Live Demo",
          },
        ]}
        status="work in progress"
        images={["/TCL/1.png", "/TCL/2.png", "/TCL/3.png"]}
        isLandscape={true}
      />
      <Content
        title="Balap Egrang"
        description="A racing game  based on indonesian traditional game "
        tag={["Game", "Unity", "3D", "Racing Game"]}
        link={[
          {
            img: "/github.png",
            href: "https://github.com/sadasas/BalapEgrang",
            content: "Source Code",
          },
        ]}
        status="work in progress"
        isLandscape={true}
      />
      <Content
        title="Oishi For Everyone"
        description="Play be a successful fried chicken restaurant entrepreneur"
        status="alpha "
        tag={["Game", "Unity", "2D", "Simulator"]}
        link={[
          {
            img: "/github.png",
            href: "https://github.com/sadasas/AdverGame",
            content: "Source Code",
          },
          {
            img: "/itchio.png",
            href: "https://wahyusrp.itch.io/oishiforeveryone",
            content: "App",
          },
        ]}
        images={["oishi/1.png", "/oishi/2.png", "/oishi/3.png", "/oishi/4.png"]}
        isLandscape={false}
      />
    </section>
  );
}

export default Projects;
