import React from "react";
// import "./signup.css";

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

const Heading = ({ children }) => {
  return <h1 className="heading">{children}</h1>;
};

const Input = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} className="input" />;
};

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

export { Container, Heading, Input, Button };
