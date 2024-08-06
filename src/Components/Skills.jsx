import React, { forwardRef } from "react";
import "../styles/Skills.css";

function Skills(props, ref) {
  return (
    <div className="Skills" ref={ref}>
      <div className="Skills_Container">
        <div className="Frontend_Skills">
          <h3>Frontend</h3>
          <ul className="Skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
          </ul>
        </div>
        <div className="Backend_Skills">
          <h3>Backend</h3>
          <ul className="Skills">
            <li>Java Script</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>API Integration</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="Other_Skills">
          <h3>Miscellaneous</h3>
          <ul className="Skills">
            <li>Git</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Skills);
