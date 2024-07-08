import React from "react";
import styles from "../stylesheets/Services.module.css";

const Services = () => {
  return (
    <div name="Services" className={styles.services}>
      <p>We solve your company's problems by creating amazing web pages.</p>
      <img
        className={styles.webImage}
        src={require("../images/webImage.jpg")}
        alt='webImage'
      ></img>
    </div>
  );
};

export default Services;