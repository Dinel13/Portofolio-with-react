import React from "react";
import Education from "./education";
import Exper from "./experi";
import "./style.css"

const academy = () => {
  return (
      <div className="container">
        <Education></Education>
        <Exper></Exper>
        <br/><br/>
      </div>
  );
};
export default academy;
