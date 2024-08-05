import React, { forwardRef } from "react";
import "../styles/Projects.css";

function Projects(props, ref) {
  return <div ref={ref} className="projects">Projects</div>;
}

export default forwardRef(Projects);
