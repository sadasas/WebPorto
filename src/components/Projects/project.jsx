import React from "react";
import PropTypes from "prop-types";
import styles from "./project.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Content({ title, description, tag, link, status }) {
  const control = useAnimation();
  const [ref, inView] = useInView({
    rootMargin: "-400px",
  });

  const containerVariant = {
    visible: {
      width: "90vw",

      transition: { duration: 0.5 },
    },
    hidden: { width: "100vw" },
  };

  const descriptionVariant = {
    visible: {
      opacity: 100,

      transition: { duration: 0.9 },
    },
    hidden: { opacity: 0 },
  };
  const imageVariant = {
    visible: {
      "border-radius": "0 20px 20px 0",
      border: "solid white 1px",
      opacity: 100,
      transition: { duration: 0.9 },
    },
    hidden: {
      border: "none",
      opacity: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={control}
      className={styles.container}
    >
      <motion.div
        ref={ref}
        variants={descriptionVariant}
        initial="hidden"
        animate={control}
        className={styles.description}
      >
        <div>
          <h2>{title}</h2>

          <div className={styles["description-tag"]}>
            {tag &&
              tag.length > 0 &&
              tag.map((item, i) => <h4 key={i}>{item}</h4>)}
          </div>
          <h4 className={styles["description-status"]}>status : {status}</h4>
        </div>
        <div>
          <h3>{description}</h3>
          <div className={styles["description-link"]}>
            {link &&
              link.length > 0 &&
              link.map(({ img, href, content }, i) => (
                <a title={content} href={href} key={i}>
                  <img alt={content} src={img}></img>
                </a>
              ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        variants={imageVariant}
        initial="hidden"
        animate={control}
        className={styles.image}
      ></motion.div>
    </motion.div>
  );
}

Content.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.array,
  link: PropTypes.array,
  status: PropTypes.string,
};
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
      />
      <Content
        title="Balap Karung"
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
      />
      <Content
        title="Oishi For Everyone"
        description="play be a successful fried chicken restaurant entrepreneur"
        status="alpha "
        tag={["Game", "Unity", "2D Game", "Simulator"]}
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
      />
    </section>
  );
}

export default Projects;
