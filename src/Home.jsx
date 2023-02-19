import React from "react";
import Navbar from "./NavBar/NavBar";
import Intro from "./Intro/intro";
import HomePage from "./Items/items"

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Intro />
      <HomePage/>
    </div>
  );
};

export default Home;
