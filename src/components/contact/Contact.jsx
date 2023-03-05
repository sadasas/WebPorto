import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";

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
      <h5>Drop me an email:</h5>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfqbtvdFhdmDWQhCGXZKzxXfVrNCTJxGKfcqZVhJjspBzncfdRrrTDkPstHBVSWFxLqfgV">
        <h4>setio101199@gmail.com</h4>
      </a>
      <div className={styles["social-media"]}>
        <Media text="instagram" link="https://www.instagram.com/wahyu_srp/" />
        <Media
          text="linkedin"
          link="https://www.linkedin.com/in/wahyu-setio-rilo-pambudi-54381b146/"
        />
        <Media text="twitter" link="https://twitter.com/wwww80086302" />
      </div>
    </section>
  );
}

export default Contact;
