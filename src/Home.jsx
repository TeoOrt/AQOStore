import React, { useState, useEffect } from "react";
import Navbar from "./NavBar/NavBar";
import Intro from "./Intro/intro";
import StoreGrid from "./Items/columns";
import test from "./NavBar/AQOLOGO.svg";
import FooterContainer from "./Footer/footer";
import CalendarWrap from "./Calendar/cal-get";
const Home = () => {
  const [items, setItems] = useState([
    {
      name: "Hello Kitty Garland",
      price: "$150.00",
      image: test,
    },
  ]);

  return (
    <div className="Home">
      <Navbar />
      <Intro />
      <StoreGrid items={items} />
      <CalendarWrap />
      <FooterContainer />
    </div>
  );
};

export default Home;
