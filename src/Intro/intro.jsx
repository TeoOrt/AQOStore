import React from "react";
import Escape from "./Escape.svg";
import intro_styles from "./introStyles";

const Intro = () => {
  return (
    <div className="QuotesPage" style={intro_styles.QuotesPage}>
      <div style={intro_styles.card}>
        <img
          src={Escape}
          alt="Escape from Reality"
          style={intro_styles.EscapeFromReality}
        />
      </div>
    </div>
  );
};

export default Intro;
