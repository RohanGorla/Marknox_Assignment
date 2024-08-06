import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div>
    <div className="About_Header">
      <h1>About</h1>
    </div>
      <p>
        Hello, I am Rohan. I'm a self taught web developer with a passion to
        build cool and unique websites. I've been learning web development from
        since November, 2023 and have been improving and refining my skills to
        make better websites. I'm always on the search for new things i can
        build, which will challenge my current knowledge and improve my skill
        set at the same time. Currently I'm looking for my first full-time job
        and start my career in Web development.
      </p>
      <p>
        I had the opportunity to be highly creative while building various
        projects using the skills I learned independently. This self-directed
        learning phase allowed me to fully explore my creativity, as each
        project presented a new challenge and an exciting opportunity to learn
        something new. The most thrilling aspect was the anticipation of
        acquiring new knowledge and the satisfaction of seeing a completed
        project that I had built from scratch. I primarily honed my skills
        through project-based learning, which reinforced my understanding and
        application of different technologies. However, staying motivated
        throughout the project duration, especially when faced with significant
        challenges, was difficult. Despite these obstacles, my consistency and
        determination ensured that I finished each project, gaining valuable
        insights and reinforcing my problem-solving abilities along the way.
      </p>
      <div className="skills">
        <div className="Skills_Container">
          <div className="Frontend_Skills Skills_Card">
            <h3>Frontend</h3>
            <ul className="Skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="Backend_Skills Skills_Card">
            <h3>Backend</h3>
            <ul className="Skills">
              <li>Java Script</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>API Integration</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="Other_Skills Skills_Card">
            <h3>Miscellaneous</h3>
            <ul className="Skills">
              <li>Git</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
