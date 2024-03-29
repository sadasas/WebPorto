import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "@styles/project/project.module.scss";
import { Content } from "./Content";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.title}>Projects</h1>
      <Content
        title="JustSee"
        description="JustSee gives fans everywhere a way to discover, save, and enjoy the entertainment they love the most. "
        tag={[
          "web",
          "nextjs",
          "typescript",
          "redux",
          "react query",
          "react-window",
          "axios",
          "sass",
        ]}
        link={[
          {
            img: "/img/github.png",
            href: "https://github.com/sadasas/movie-watcher/",
            content: "Source Code",
          },
          {
            img: "/img/web.png",
            href: "https://just-see-sadasas.vercel.app/",
            content: "Live Demo",
          },
        ]}
        status="work in progress"
        images={["/img/justSee/1.png", "/img/justSee/2.png"]}
        isLandscape={true}
      />
      <Content
        title="TCL App"
        description="Ecommerce with simplicity and clean design "
        tag={["web", "react", "redux", "sass", "vite", "graphql", "mongodb"]}
        link={[
          {
            img: "/img/github.png",
            href: "https://github.com/sadasas/TCL/",
            content: "Source Code",
          },
          {
            img: "/img/web.png",
            href: "https://tcl-eight.vercel.app/",
            content: "Live Demo",
          },
        ]}
        status="work in progress"
        images={["/img/TCL/1.png", "/img/TCL/2.png", "/img/TCL/3.png"]}
        isLandscape={true}
      />
      <Content
        title="Balap Egrang"
        description="A racing game  based on indonesian traditional game "
        tag={["Game", "Unity", "3D", "Racing Game"]}
        link={[
          {
            img: "/img/github.png",
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
            img: "/img/github.png",
            href: "https://github.com/sadasas/AdverGame",
            content: "Source Code",
          },
          {
            img: "/img/itchio.png",
            href: "https://wahyusrp.itch.io/oishiforeveryone",
            content: "App",
          },
        ]}
        images={[
          "/img/oishi/1.png",
          "/img/oishi/2.png",
          "/img/oishi/3.png",
          "/img/oishi/4.png",
        ]}
        isLandscape={false}
      />
    </section>
  );
}

export default Projects;
