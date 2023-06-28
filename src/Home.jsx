import React, { useState, useEffect } from "react";
import Navbar from "./NavBar/NavBar";
import Intro from "./Intro/intro";
import StoreGrid from "./Items/columns";
import FooterContainer from "./Footer/footer";
import CalendarWrap from "./Calendar/cal-get";
import axios from "axios";
const Home = () => {
  const [items, setItems] = useState([]);

  const get_images = async () => {
    try {
      const res = await axios.get("/ImageGalleryGood");
      console.log(res.data);
      setItems(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    get_images();
  }, []);

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
