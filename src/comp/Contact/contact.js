import React from "react";
import Adress from "./adress";
import Map from "./map";
import Contact from "./contactus";
import "./cont.css"

export default function contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <Contact></Contact>
        <div className="clearfix"> </div>
        <Map></Map>
        <Adress></Adress>
        <div className="clearfix"> </div>
      </div>
    </div>
  );
}
