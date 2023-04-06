import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./TypedText.module.css";

function TypedText({ text, delay }) {
  const [revealedChars, setRevealedChars] = useState(0);
  const [revealedWords, setRevealedWords] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRevealedChars((i) => i + 1), delay);
    function nextWord() {
      setRevealedChars(0);
      if (revealedWords < text.length - 1) setRevealedWords((i) => i + 1);
      else setRevealedWords(0);
    }
    if (revealedChars == text[revealedWords].length) {
      setTimeout(() => nextWord(), 1400);
    }
    return () => clearInterval(interval);
  }, [revealedChars]);

  return (
    <h1 className={styles.text}>
      {text[revealedWords].substring(0, revealedChars)}
    </h1>
  );
}

TypedText.propTypes = {
  text: PropTypes.array,
  delay: PropTypes.number,
};

export default TypedText;
