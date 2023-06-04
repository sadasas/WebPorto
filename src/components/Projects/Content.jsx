import React, { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "@/styles/project/content.module.scss";

export function Content({
  title,
  description,
  tag,
  link,
  status,
  images,
  isLandscape,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const containerMotion = {
    visible: {},
    hidden: {},
  };

  const descriptionMotion = {
    visible: {
      x: 0,
      transition: { duration: 0.4 },
    },
    hidden: {
      x: "-100%",
    },
  };
  const imageMotion = {
    visible: {
      x: 0,
      border: "solid white 1px",
      transition: { duration: 0.4, border: { delay: 0.4 } },
    },
    hidden: {
      x: "100%",
      border: "none",
    },
  };

  const placeholderLandscapeImg = "/img//placeholder/300x500.png";
  const placeholderPotraitImg = "/img/placeholder/600x300.png";

  return (
    <motion.div
      ref={ref}
      variants={containerMotion}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={styles.content}
    >
      <motion.div
        variants={descriptionMotion}
        className={styles["content-description"]}
      >
        <div>
          <h2>{title}</h2>

          <div className={styles["content-description-tag"]}>
            {tag &&
              tag.length > 0 &&
              tag.map((item, i) => <h5 key={i}>{item}</h5>)}
          </div>
          <h5 className={styles["content-description-status"]}>
            status : {status}
          </h5>
        </div>
        <div>
          <h3>{description}</h3>
          <div className={styles["content-description-link"]}>
            {link &&
              link.length > 0 &&
              link.map(({ img, href, content }, i) => (
                <div
                  className={styles["content-description-link-container"]}
                  key={i}
                >
                  <a
                    title={content}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt={content} src={img}></img>
                  </a>
                  <p>{content}</p>
                </div>
              ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={imageMotion}
        className={styles["content-caraousel-container"]}
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          autoPlay="true"
          infiniteLoop="true"
          centerMode="true"
          className={styles["content-caraousel"]}
        >
          {images &&
            images.length > 0 &&
            images.map((src, i) => (
              <LazyLoadImage
                placeholderSrc={
                  isLandscape ? placeholderLandscapeImg : placeholderPotraitImg
                }
                key={i}
                className={
                  isLandscape
                    ? styles["content-caraousel-images-landscape"]
                    : styles["content-caraousel-images-potrait"]
                }
                src={src}
              />
            ))}
        </Carousel>
      </motion.div>
    </motion.div>
  );
}
Content.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tag: PropTypes.array,
  link: PropTypes.array,
  status: PropTypes.string,
  images: PropTypes.array,
  isLandscape: PropTypes.bool,
};
