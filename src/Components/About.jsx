import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="About_Main">
      <div className="About_Header">
        <h1>About me</h1>
      </div>
      <p className="About_Para" style={{color:'black', fontWeight:'600'}}>
        Hello, I am Rohan. I'm a self taught web developer with a passion to
        build cool and unique websites. I've been learning web development from
        since November, 2023 and have been improving and refining my skills to
        make better websites. I'm always on the search for new things i can
        build, which will challenge my current knowledge and improve my skill
        set at the same time. Currently I'm looking for my first full-time job
        and start my career in Web development.
      </p>
      <p className="About_Para">
        I had the opportunity to be highly creative while building various
        projects using the skills I learned independently. This self-directed
        learning phase allowed me to fully explore my creativity, as each
        project presented a new challenge and an exciting opportunity to learn
        something new. The most thrilling aspect was the anticipation of
        acquiring new knowledge and the satisfaction of seeing a completed
        project that I had built from scratch.
      </p>
      <p className="About_Para" style={{color:'black', fontWeight:'600'}}>
        I primarily honed my skills through project-based learning, which
        reinforced my understanding and application of different technologies.
        However, staying motivated throughout the project duration, especially
        when faced with significant challenges, was difficult. Despite these
        obstacles, my consistency and determination ensured that I finished each
        project, gaining valuable insights and reinforcing my problem-solving
        abilities along the way.
      </p>
    </div>
  );
}

export default About;
