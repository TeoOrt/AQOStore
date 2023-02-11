import React from "react";
import AqoLogo from "./AQOLOGO.svg"
import UserBox from "./User_box_fill.svg"
import UserCart from "./Bag_alt_fill.svg"
function Navbar() {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px"
    },
    section: {
      display: "flex",
      alignItems: "center"
    },
    h1: {
      marginLeft: "10px",
      fontWeight: "700",
      fontFamily: "Corben, sans-serif",
      fontSize: "34px"
    },
    a: {
      margin: "0 33px 0 33px",
      textDecoration: "none",
      color: "#000000",
      fontWeight: "400",
      fontSize:"20px",
      fontFamily:"Corben, san-serif"
    },
    AqoLogo:{
        width: "146px",
        height: "129px" 
    },
    FindUs:{
        marginRight: "30px",
        fontWeight: "700",
        fontFamily: "Corben, sans-serif",
        fontSize: "20px",
        color:"#000000",
        textDecoration:"none"
    }
  };

  return (
    <nav style={styles.nav}>
      <div className="left-section" style={styles.section}>
        <img src={AqoLogo} alt="Logo" style={styles.AqoLogo}/>
        <h1 style={styles.h1}>AQO Store</h1>
      </div>
      <div className="middle-section" style={styles.section}>
        <a href="#" style={styles.FindUs}>
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
        <a href="#">
          <img src={UserBox} alt="Account" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
