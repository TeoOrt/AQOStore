import React from "react";
import axios from "axios";
import "./Modal.css";
import SelectTime from "./selecttimes";
import { useState } from "react";
import Slideshow from "./slideshow";
const Modal = ({ handleClose, show, children, date, times }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [showSlideshow, setShowSlideshow] = useState(false);

  const [time, setTime] = useState("9am");

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [catalogItems, setCatalogItems] = useState([]);

  const get_catalog = async () => {
    try {
      const response = await axios.get("/get-catalog");
      setCatalogItems(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("didn't get data from backend, check catalog api");
    }
  };

  //This handles the event state for times
  const handleChange = (event) => {
    setTime(event.target.value);
  };

  //  --NOTE PROTOTYPE CODE
  const handleSubmit = async (event) => {
    event.preventDefault();
    //pass data to slide show ready for submittion
    setShowSlideshow(true);
    get_catalog();
  };

  const handleSelect = (index) => {
    setSelectedImage(catalogItems.s3_id[index]);
    setSelectedPrice(catalogItems.price[index]);
  };

  return (
    <div className={showHideClassName}>
      {showSlideshow ? (
        <Slideshow
          images={catalogItems.s3_id}
          prices={catalogItems.price}
          onSelect={handleSelect}
        ></Slideshow>
      ) : (
        <SelectTime
          handleChange={handleChange}
          date={date}
          handleSubmit={handleSubmit}
          children={children}
          time={time}
          times={times}
          handleClose={handleClose}
        ></SelectTime>
      )}
    </div>
  );
};

export default Modal;
