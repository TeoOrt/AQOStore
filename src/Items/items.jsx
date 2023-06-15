import React from "react";
function StoreItem(props) {
  return (
    <div className="store-item">
      <img
        src={`https://aqo-balloon-gallery.s3.amazonaws.com/` + props.image}
        alt={props.name}
      />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
    </div>
  );
}

export default StoreItem;
