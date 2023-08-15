"use client";
import React from "react";
// import styles from "../stylesheets/navigations.css";
import "../stylesheets/navigations.css";

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="./assets/brand_logo.png" alt="gre" />
        </div>
        <ul>
          <li>Menu</li>
          <li>Location </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>login</button>
      </nav>
    </div>
  );
};
export default Navigation;
