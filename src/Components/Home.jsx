import React, { forwardRef } from "react";
import "../styles/Home.css";
import resume from "../ROHAN.pdf";

function Home(props, ref) {
  return (
    <div className="Home">
      <div ref={ref} className="Home_Main">
        <div className="tint"></div>
        <div className="Home_Container">
          <h1 className="Home_Title">Rohan Gorla</h1>
          <h2 className="Home_Quote">Frontend Web developer</h2>
          <p className="Home_Para">
            I like to build cool websites using my skills in Web development and
            always in pirsuit to improve my skill set.
          </p>
          <div className="Home_Buttons">
            <button
              className="button github_button"
              onClick={() => {
                window.open("https://github.com/RohanGorla", "_blank");
              }}
            >
              Github
            </button>
            <button className="button resume_button">
              <a href={resume} download="RESUME-RohanGorla">
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <div
        className="Scroll_Down"
        onClick={() => {
          props.SkillRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <p
          style={{
            fontWeight: "600",
            color: "white",
            position: "relative",
            zIndex: "2",
          }}
        >
          Scroll down
        </p>
        {/* <p color="white">▼</p> */}
      </div>
    </div>
  );
}

export default forwardRef(Home);
