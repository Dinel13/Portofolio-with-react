import TextSkill from "./TextSkil";
import "./skill.css";
import React from "react";

export default function skil() {
  return (
    <div className="skill">
      <div className="container mx-md-20">
        <h1 className="title" style={{ margin: "1.5em auto" }}>
          My Skills
        </h1>
        <TextSkill></TextSkill>
        <div className="clearfix"> </div>
        <br/>
        <br/>
      </div>
    </div>
  );
}
