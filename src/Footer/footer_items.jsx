import React from "react";
import "./footer_items.css";
const FooterItems = (props) => {
  return (
    <div>
      {props.link === true ? (
        <a href={props.linkpage} className="anchor-footer">
          <p className="footer-title">{props.title}</p>
        </a>
      ) : (
        <p className="footer-title">{props.title}</p>
      )}
    </div>
  );
};

export default FooterItems;
