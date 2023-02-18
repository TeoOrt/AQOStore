import React from "react";
import Navbar from "./NavBar/NavBar";
import Intro from "./Intro/intro";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Intro />
      <p>Hi</p>
    </div>
  );
};

export default Home;
