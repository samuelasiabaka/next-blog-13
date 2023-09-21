import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>This is a Nextjs 13 fullstack blogS app</p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone +234 8174575535</span>
          <span>YouTube: samuel</span>
          <span>GitHub: samuelasiabaka</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Africa</span>
          <span>Country: Nigeria</span>
          <span>Current Location: Nigeria</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
