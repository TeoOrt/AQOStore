import React, { useState } from "react";
import Navbar from "./NavBar/NavBar";
import Intro from "./Intro/intro";
import StoreGrid from "./Items/columns";
import test from "./Items/earings.png";

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

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="Home">
      <Navbar />
      <Intro />
      <StoreGrid items={items} />
    </div>
  );
};

export default Home;
