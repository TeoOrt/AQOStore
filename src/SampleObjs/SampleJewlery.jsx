import React from "react";
import "./Sample.css";
import Logo from "../NavBar/AQOLOGO.svg";

const NavBarTest = () => {
  return (
    <nav className="nav">
      <div className="nav__logo-container">
        <img src={Logo} alt="logo" className="nav__logo" />
        <p className="nav__logo-text">Brand Name</p>
      </div>
      <div className="nav__links">
        <a href="/" className="nav__link">
          Shop
        </a>
        <a href="/earings" className="nav__link">
          Earrings
        </a>
      </div>
      <div className="nav__cart-container">
        <img src={Logo} alt="cart-logo" className="nav__cart-logo" />
      </div>
    </nav>
  );
};

export default NavBarTest;
