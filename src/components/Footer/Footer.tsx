import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <a href="https://www.github.com/bhaveek424" target="_blank">
        Bhaveek Jain
      </a>
      <br />
      {currentYear}
    </footer>
  );
};
