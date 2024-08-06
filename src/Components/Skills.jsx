import React, { forwardRef } from "react";
import "../styles/Skills.css";
import html from "../assets/Html_Icon.png";
import css from "../assets/CSS_Icon.png";
import js from "../assets/JS_Icon.png";
import ejs from "../assets/Ejs_Icon.png";
import express from "../assets/Express_Icon.png";
import git from "../assets/Git_Icon.png";
import github from "../assets/Github_Icon.png";
import mysql from "../assets/MySQL_Icon.png";
import node from "../assets/Node_Icon.jpg";
import npm from "../assets/npm_Icon.png";
import postgre from "../assets/Postgresql_Icon.png";
import react from "../assets/React_Icon.svg";
import responsive from "../assets/Responsive_Icon.png";
import sql from "../assets/sql_Icon.jpg";
import tailwind from "../assets/Tailwind_Icon.png";

function Skills(props, ref) {
  return (
    <div className="Skills">
      <div ref={ref} className="content FrontEnd">
        <div className="labels">
          <div className="skills-label">
            <h3>Frontend Skills</h3>
            <div className="line"></div>
          </div>
        </div>
        <div className="display">
          <div className="skills-main">
            <div className="skill">
              <img src={html}></img>
              <p>HTML</p>
            </div>
            <div className="skill">
              <img src={css}></img>
              <p>CSS</p>
            </div>
            <div className="skill">
              <img src={js}></img>
              <p>Java Script</p>
            </div>
            <div className="skill">
              <img src={react}></img>
              <p>React.js</p>
            </div>
            <div className="skill">
              <img src={tailwind}></img>
              <p>Tailwind Css</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content BackEnd">
        <div className="labels">
          <div className="skills-label">
            <h3>Backend Skills</h3>
            <div className="line"></div>
          </div>
        </div>
        <div className="display">
          <div className="skills-main">
            <div className="skill">
              <img src={node}></img>
              <p>Node.js</p>
            </div>
            <div className="skill">
              <img src={express}></img>
              <p>express.js</p>
            </div>
            <div className="skill">
              <img src={npm}></img>
              <p>npm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content Database">
        <div className="labels">
          <div className="skills-label">
            <h3>Databases</h3>
            <div className="line"></div>
          </div>
        </div>
        <div className="display">
          <div className="skills-main">
            <div className="skill">
              <img src={sql}></img>
              <p>SQL</p>
            </div>
            <div className="skill">
              <img src={mysql}></img>
              <p>MySQL</p>
            </div>
            <div className="skill">
              <img src={postgre}></img>
              <p>PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content Other">
        <div className="labels">
          <div className="skills-label">
            <h3>General Skills & Tools</h3>
            <div className="line"></div>
          </div>
        </div>
        <div className="display">
          <div className="skills-main">
            <div className="skill">
              <img src={git}></img>
              <p>Git</p>
            </div>
            <div className="skill">
              <img src={github}></img>
              <p>Github</p>
            </div>
            <div className="skill">
              <img src={responsive}></img>
              <p>Responsive Design</p>
            </div>
            <div className="skill">
              <img src={ejs}></img>
              <p>Embedded JS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Skills);
