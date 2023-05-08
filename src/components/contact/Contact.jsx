import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import styles from "../../styles/contact/Contact.module.scss";

function Media({ text, link }) {
  return (
    <div className={styles["social-media-item"]}>
      <a href={link}>
        <h4>{text}</h4>
      </a>
    </div>
  );
}
Media.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
};

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1>
        INTERESTED IN <br /> WORKING TOGETHER?
      </h1>
      <h4>Drop me an email:</h4>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfqbtvdFhdmDWQhCGXZKzxXfVrNCTJxGKfcqZVhJjspBzncfdRrrTDkPstHBVSWFxLqfgV">
        <h3>setio101199@gmail.com</h3>
      </a>
      <div className={styles["social-media"]}>
        <Media text="instagram" link="https://www.instagram.com/wahyu_srp/" />
        <Media
          text="linkedin"
          link="https://www.linkedin.com/in/wahyu-setio-rilo-pambudi-54381b146/"
        />
        <Media text="twitter" link="https://twitter.com/wwww80086302" />
      </div>
      <div className={styles.copyright}>
        <h5>WSRP | This website is under construction</h5>
        <h5>©2023 - All Rights Reserved</h5>
      </div>
    </section>
  );
}

export default Contact;
