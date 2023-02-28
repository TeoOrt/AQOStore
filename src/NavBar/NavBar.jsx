import React from "react";
import AqoLogo from "./AQOLOGOSVG.svg";
import UserBox from "./User_box_fill.svg";
import UserCart from "./Bag_alt_fill.svg";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="section">
        <img src={AqoLogo} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">AQO Store</h1>
      </div>
      <div className="section">
        <a
          href="https://www.instagram.com/aqo.jewelry/"
          className="navbar-link"
        >
          Jewelry
        </a>
        <a href="#store-grid" className="navbar-link">
          Accesories
        </a>
      </div>
      <div className="section">
        {/* <a href="/">
          <img src={UserCart} alt="Cart" className="navbar-icon" />
        </a> */}
        <a href="/Login">
          <img src={UserBox} alt="Account" className="navbar-icon" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
