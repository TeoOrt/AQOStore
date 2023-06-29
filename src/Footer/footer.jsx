import React, { useState } from "react";
import FooterColumns from "./FooterColumn";
import "./footer_items.css";
const FooterContainer = () => {
  const [props_footer, setProps_Footer] = useState([
    // { title: "SHOP", link: false, linkpage: "" },
    // { title: "ABOUT", link: false, linkpage: "/About" },
    // { title: "CARE GUIDE", link: false, linkpage: "" },
    // { title: "LOCATE US", link: false, linkpage: "" },
    { title: "Terms of Service", link: false, linkpage: "" },
    { title: "mateo041ortega@gmail.com", link: false, linkpage: "" },
    { title: "El Paso, Texas", link: false, linkpage: "" },
  ]);

  return (
    <footer className="footer-container">
      <FooterColumns footer_item={props_footer} />
    </footer>
  );
};

export default FooterContainer;
