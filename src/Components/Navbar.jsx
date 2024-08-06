import React, { forwardRef } from "react";
import { NavLink, Link } from "react-router-dom";
import resume from "../ROHAN.pdf";
import "../styles/Navbar.css";

function Navbar(props) {
  return (
    <div className="Navbar_Main">
      <div className="Navbar_Container">
        <nav style={{ padding: "1em 0" }}>
          <ul className="NavList">
            <li
              onClick={() => {
                props.HomeRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                props.ProjectsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Projects
            </li>
            <li
            >
              <Link to={"/about"} target="_blank" id="Home_About">
                About
              </Link>
            </li>
            <li
              onClick={() => {
                props.ContactRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
