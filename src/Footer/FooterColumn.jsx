import React from "react";
import FooterItems from "./footer_items";
import "./footer_items.css";
const FooterColumns = (props) => {
  return (
    <div className="footer-grid">
      {props.footer_item.map((item, index) => (
        <FooterItems
          key={index}
          title={item.title}
          link={item.link}
          linkpage={item.linkpage}
        />
      ))}
    </div>
  );
};

export default FooterColumns;
