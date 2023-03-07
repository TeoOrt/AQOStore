import React, { useState } from "react";
import Navbar from "./NavBar/NavBar";
import Intro from "./Intro/intro";
import StoreGrid from "./Items/columns";
import test from "./NavBar/AQOLOGO.svg";
import FooterContainer from "./Footer/footer";
const Home = () => {
  const [items, setItems] = useState([
    {
      name: "Sapphire Earrings",
      price: "$49.99",
      image: test,
    },
    {
      name: "Ruby Necklace",
      price: "$69.99",
      image: test,
    },
    {
      name: "Amethyst Bracelet",
      price: "$39.99",
      image: test,
    },
    {
      name: "Emerald Ring",
      price: "$79.99",
      image: test,
    },
  ]);

  return (
    <div className="Home">
      <Navbar />
      <Intro />
      <StoreGrid items={items} />
      <FooterContainer />
    </div>
  );
};

export default Home;
