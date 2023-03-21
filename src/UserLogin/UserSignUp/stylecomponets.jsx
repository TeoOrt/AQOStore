import React from "react";
import "./style.css";
import AQOLogo from "../../NavBar/AQOLOGO.svg";

const Container = ({ children }) => {
  return (
    <div className="container">
      <a href="/" className="logo-container">
        <img src={AQOLogo} alt="Logo" className="logo" />
      </a>
      {children}
    </div>
  );
};

const Heading = ({ children }) => {
  return <h1 className="heading">{children}</h1>;
};

export { Container, Heading };
