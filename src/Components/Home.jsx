import React, { forwardRef } from "react";
import "../styles/Home.css";
import backGround from "../assets/Home_BG.jpg";
import DownArrow from "../assets/Down_Arrow.png";

function Home(props, ref) {
  return (
    <div className="Home">
      <div ref={ref} className="Home_Main">
        <div className="Home_Container">
          <h1 className="Home_Title">Rohan Gorla</h1>
          <h2 className="Home_Quote">Frontend Web developer</h2>
        </div>
      </div>
      <div
        className="Down_Arrow"
        onClick={() => {
          props.SkillRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <p style={{fontWeight:'600'}}>Scroll down</p>
        <img src={DownArrow}></img>
      </div>
    </div>
  );
}

export default forwardRef(Home);
