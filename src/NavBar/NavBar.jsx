import React from "react";
import { Link } from "react-router-dom";
import Styles from "./NavBarStyles";
import Aqologo from "./AQOLOGOSVG.svg";
import User_Box from "./User_box_fill.svg";
import Bag_alt from "./Bag_alt_fill.svg";
const NavBar = () => {
  return (
    <div style={Styles.navStyles}>
      <div style={Styles.logoContainerStyles}>
        <img src={Aqologo} alt="logo" style={Styles.logoStyles} />
        <p style={Styles.logoTextStyles}>AQO Store</p>
      </div>
      <div style={Styles.navLinksStyles}>
        <Link to="/" style={Styles.navLinkStyles}>
          Shop
        </Link>
        <Link to="/earings" style={Styles.navLinkStyles}>
          Earrings
        </Link>
      </div>
      <div style={Styles.cartContainerStyles}>
        <img src={Bag_alt} alt="cart-logo" style={Styles.cartLogoStyles} />
      </div>
      {/* <style>{Styles.mobileStyles["@media (max-width: 768px)"]}</style> */}
    </div>
  );
};

export default NavBar;
