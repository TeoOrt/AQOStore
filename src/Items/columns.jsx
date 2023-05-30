import React from "react";
import "./items.css";
import StoreItem from "./items";

function StoreGrid(props) {
  return (
    <div className="store-grid" id="Gallery">
      {props.items.map((item, index) => (
        <StoreItem
          key={index}
          image={item.s3_id}
          name={item.title}
          price={item.price}
          style={item.category}
        />
      ))}
    </div>
  );
}

export default StoreGrid;
