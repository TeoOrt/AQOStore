import React from "react";
import Escape from "./Escape.svg"

const Intro = () =>{
    return(
        <div className="QuotesPage">
          
                <ul>
                    <li>
            <h1>QUOTES FOR YOU</h1>
            </li>
            <li>
            <img src={Escape} alt= "Escape from Reality" />
            </li>
            </ul>
        </div>

    );
}

export default Intro;