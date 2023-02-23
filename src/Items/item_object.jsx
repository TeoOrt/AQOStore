import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Jewlery = () => {
  const [JewleryType, setJewleryType] = useState("");
  const [JewleryPrice, setJewleryPrice] = useState("");
  const [JewleryPicture, setJewleryPicture] = useState("");
  const [JewleryName, setJewleryName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api");
        setJewleryType(response.data.Type);
        setJewleryPicture(response.data.Picture);
        setJewleryPrice(response.data.Price);
        setJewleryName(response.data.Name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  });

  return (
    <tr>
      <a href="/Sample">
        <img src={JewleryPicture} alt="Mateo" className="item-image" />
        <h1 className="item-name">{JewleryName}</h1>
        <h2 className="item-price">{JewleryPrice}</h2>
        <h3 className="item-quantity">{JewleryType}</h3>
      </a>
    </tr>
  );
};

export default Jewlery;
