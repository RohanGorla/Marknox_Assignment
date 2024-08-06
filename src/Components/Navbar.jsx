import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar(props) {
  const [show, setShow] = useState(false);

  return (
    <div className="Navbar_Main">
      <div className="Navbar_Container">
        <nav>
          <div
            className="hamburger-btn"
            onClick={() => {
              setShow(!show);
            }}
          >
            <span className="hamburger"></span>
          </div>
          <ul className={show ? "NavList" : "NavList Nav_Hidden"}>
            <li
              onClick={() => {
                props.HomeRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
                setShow(!show);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                props.ProjectsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
                setShow(!show);
              }}
            >
              Projects
            </li>
            <li>
              <Link to={"/about"} target="_blank" id="Home_About">
                About
              </Link>
            </li>
            <li
              onClick={() => {
                props.ContactRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
                setShow(!show);
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
