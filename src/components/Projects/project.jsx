import React from "react";
import styles from "./project.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Content } from "./Content";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h1>Projects</h1>
      <Content
        title="My Web Portofolio"
        description="my personal web portofolio "
        tag={["web", "react"]}
        link={[
          {
            img: "/github.png",
            href: "https://github.com/sadasas/WebPorto",
            content: "Source Code",
          },
          {
            img: "/web.png",
            href: "https://web-porto-eight.vercel.app/",
            content: "Web",
          },
        ]}
        status="work in progress"
        images={["/webporto/1.png", "/webporto/2.png", "/webporto/3.png"]}
        isLandscape={true}
      />
      <Content
        title="Balap Egrang"
        description="a racing game  based on indonesian traditional game "
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
        description="play be a successful fried chicken restaurant entrepreneur"
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
            content: "App release",
          },
        ]}
        images={["oishi/1.png", "/oishi/2.png", "/oishi/3.png", "/oishi/4.png"]}
        isLandscape={false}
      />
    </section>
  );
}

export default Projects;
