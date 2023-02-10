import React from "react";
import AQOLOGO from "./AQOLOGO.svg";
import Bag from "./Bag_alt_fill.svg"
import UserPicture from "./User_box_fill.svg";
import AQOPINK from "./AQOLOGOSVG.svg"
import "@fontsource/corben"; // Defaults to weight 400.

const Navbar = () =>{
    return(
        <header>
<div className="NavBar">
    
<ul>
<li className="LogoL">
<div className="Logo">
    <ul className="LogoList">
<li className="AqoLogo">
<img src={AQOLOGO} alt = "AQO LOGO" />
</li>
<li className="LogoName">
    <p > AQO SHOP</p>
</li>
    </ul>
</div>
</li>

<li className="DirList">
<div className="Dir">
    <ul className="Directory">
    <li className="Find">
        Find Us
    </li>
    <li className="Normal">
        Shop
    </li>
    <li className="Normal">
        FAQ
    </li>
    <li className="Normal">
        Our Story
    </li>
    </ul>

    </div>
</li>

<li className="CartList">
<div className="CartAccount">
    <ul className="CAList">
        <li className="Logos">
        <img src={Bag} alt= "Shopping Bag"/>
        </li>
        <li className="Logos">
        <img src= {UserPicture} alt= "UserLogo"/>
        </li>
    </ul>
</div>
</li>
</ul>
</div>
</header>
    );
}


export default Navbar;