import React from "react";
import Slideshow from "./slideshow";
import "./style.css";

const Header = (props) => {
  return (
    <div className="headder">
      <div className="headdir">
        <div className="logo">
          <h1>U-deen</h1>
        </div>
          <div className="triger-nav" onClick={props.click}>
            <span className="fa fa-bars fa-2x"></span>
          </div>
          <div className="clearfix"></div>
      </div>
      <Slideshow></Slideshow>
    </div>
  );
};
export default Header;
