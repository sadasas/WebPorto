import React, { useState } from "react";
import styles from "./content.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";
import pointerHandler from "../PointerHandler";

export function Content({
  title,
  description,
  tag,
  link,
  status,
  images,
  isLandscape,
}) {
  const [IsHoverDes, setIsHoverDes] = useState(false);

  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.8,
  });

  const containerVariant = {
    visible: {
      width: "1200px",
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hidden: { width: "0", opacity: 0 },
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
      opacity: 1,
      transition: { duration: 0.9 },
    },
    hidden: {
      border: "none",
      opacity: 0,
    },
  };

  const placeholderLandscapeImg = "./placeholder/300x500.png";
  const placeholderPotraitImg = "./placeholder/600x300.png";

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  useEffect(() => {
    pointerHandler(IsHoverDes);
  }, [IsHoverDes]);
  return (
    <motion.div
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={control}
      className={styles.content}
    >
      <motion.div
        onMouseEnter={() => setIsHoverDes(true)}
        onMouseLeave={() => setIsHoverDes(false)}
        ref={ref}
        variants={descriptionVariant}
        initial="hidden"
        animate={control}
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
        ref={ref}
        variants={imageVariant}
        initial="hidden"
        animate={control}
        className={styles["content-caraousel"]}
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          autoPlay="true"
          infiniteLoop="true"
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
