import React from "react";
import {Link} from "react-router-dom"
import "./nav.css";

export default function nav(props) {
  return (
    <div className="overlay" onClick={props.click}>
      <nav>
        <ul>
          <li className="nav-item">
            <Link className="nav-a" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-a" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link className="nav-a" to="/skill">
              Skill
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-a" to="/academy">
              Academy
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-a" to="/galery">
              Galery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-a" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
