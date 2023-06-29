import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./carousel.css";
const Slideshow = ({ images, prices, onSelect }) => {
  return (
    <div className="modal-main">
      <h1>Select your Arch</h1>

      <Carousel
        className="my-carousel"
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        dynamicHeight={true}
        useKeyboardArrows={true}
        onClickItem={onSelect}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={`https://aqo-balloon-gallery.s3.amazonaws.com/` + image}
              alt={`Slide ${index}`}
            />
            <p className="legend">{`Price: ${prices[index]}`}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
