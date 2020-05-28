import React from "react";
import Bio from "./bio";
import Datame from "./datame";
import "./about.css";

const About = () => {
  return (
    <div className="container">
        <h1 className="col-12 header" style={{ textAlign: "center", margin: "1em" }}>
          About Me
        </h1>
        <Bio></Bio>
        <div className="clearfix"></div>
        <Datame></Datame>
        <div className="clearfix"></div>
        <br/>
        <br/>

    </div>
  );
};

export default About;
