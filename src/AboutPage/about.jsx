import React from "react";
import NavBar from "../NavBar/NavBar";
import "./about.css";
import { useEffect, useState } from "react";

const About = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const AboutUsClassName = `AboutUs AboutUs--image${imageIndex + 1}`;
  return (
    <div>
      <NavBar />
      <div className={AboutUsClassName}>
        <h1 className="About-title">About AQO</h1>
        <h2>by Aylin Quitana Ortiz </h2>
      </div>
    </div>
  );
};

export default About;
