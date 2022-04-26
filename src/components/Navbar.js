import React from "react";
import logo from "../images/reactjs-icon.png";

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav--logo">
          <img src={logo} />
          <h3 className="brand">ReactFacts</h3>
        </div>
        <div className="nav--title">
          <h4>React Course - Project 1</h4>
        </div>
      </nav>
    </>
  );
}
