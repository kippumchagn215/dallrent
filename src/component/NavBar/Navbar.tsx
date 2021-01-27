import React from "react";
import { useState } from "react";
import { GiBed } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";

import Menu from "./NavbarComp/NavbarMenu";
const Navbars = () => {
  const [active, setActive] = useState("Room For Rent");
  const [curclass, setCurClass] = useState("topnav");

  function myFunction(event: any) {
    if (curclass === "topnav") {
      setCurClass("topnav responsive");
    } else {
      setCurClass("topnav");
    }
    event.preventDefault();
  }
  return (
    <div>
      <div className={curclass} id="myTopnav">
        <a href="#home">
          <GiBed style={{ fontSize: "20px" }} />
        </a>
        <a className="HomeLg" href="#home">
          DallRent
        </a>
        <div className="menu">
          <a href="#home" className="HomeSm">
            DallRent
          </a>
          <a href="#news">Room For Rent</a>
          <a href="#contact">For Sale</a>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <CgProfile />
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Log in</a>
            <a href="#">Profile</a>
            <a href="#">Help</a>
            <a href="#">Sign up</a>
          </div>
        </div>
        <a href="" className="icon" onClick={myFunction}>
          &#9776;
        </a>
      </div>
    </div>
  );
};

export default Navbars;
