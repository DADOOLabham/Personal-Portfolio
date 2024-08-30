import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../../utils";

export const Contact = ()=>{
    return (
        <footer id="contact" className={styles.container}>
          <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a href="mailto:dadulabham@gmail.com">dadulabham@gmail.com</a>
            </li>
            <li className={styles.link}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
              <a href="https://www.linkedin.com/in/labham-dadoo-23476821a/">Linkedin.com</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
              <a href="https://www.github.com/myname">github.com/myname</a>
            </li>
          </ul>
        </footer>
      );
};