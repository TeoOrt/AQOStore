import React from "react";
import AqoLogo from "./AQOLOGO.svg";
import UserBox from "./User_box_fill.svg";
import UserCart from "./Bag_alt_fill.svg";
import styles from "./NavBarStyles";
function Navbar() {
  return (
    <nav style={styles.nav}>
      <div className="left-section" style={styles.section}>
        <img src={AqoLogo} alt="Logo" style={styles.AqoLogo} />
        <h1 style={styles.h1}>AQO Store</h1>
      </div>
      <div className="middle-section" style={styles.section}>
        <a href="https://www.instagram.com/aqo.jewelry/" style={styles.FindUs}>
          Find us
        </a>
        <a href="#" style={styles.a}>
          Shop
        </a>
        <a href="#" style={styles.a}>
          FAQ
        </a>
        <a href="#" style={styles.a}>
          Our Story
        </a>
      </div>
      <div className="right-section" style={styles.section}>
        <a href="#">
          <img src={UserCart} alt="Cart" />
        </a>
        <a href="/Login">
          <img src={UserBox} alt="Account" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
