import React, { forwardRef } from "react";
import "../styles/Projects.css";

function Projects(props, ref) {
  return (
    <div ref={ref} className="projects">
    <h2>Projects</h2>
      <div className="Projects_Container">
        <div className="Project_Card">
          <div className="Project_Details">
            <h4 className="Project_Title">TODO LIST APP</h4>
            <p className="Project_Description">
              A To-Do Lists application that enablex users to
              create multiple lists and items. Implemented user authentication
              for secure access. Managed state with "useState" and data fetching
              with "useEffect" from an AWS MySQL database. Employed CRUD
              operations and ensured a responsive design for both mobile and
              desktop users.
            </p>
          </div>
          <div className="Project_Buttons">
            <button
              onClick={() => {
                window.open(
                  "https://personal-todos-app.netlify.app/",
                  "_blank"
                );
              }}
            >
              View Site
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://github.com/RohanGorla/LISTS_APP",
                  "_blank"
                );
              }}
            >
              Git Repo
            </button>
          </div>
        </div>
        <div className="Project_Card">
          <div className="Project_Details">
            <h4 className="Project_Title">Weather App</h4>
            <p className="Project_Description">
              Built a weather app using React.js to show accurate weather data
              based on user input. Utilized the "useEffect" hook for API data
              fetching and an NPM package for location names. Managed user data
              with "useState" and displayed current conditions and hourly
              forecasts. Designed to be fully responsive for mobile and desktop
              devices.
            </p>
          </div>
          <div className="Project_Buttons">
            <button
              onClick={() => {
                window.open("https://rohan-weather-app.netlify.app/", "_blank");
              }}
            >
              View Site
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://github.com/RohanGorla/Weather_App",
                  "_blank"
                );
              }}
            >
              Git Repo
            </button>
          </div>
        </div>
        <div className="Project_Card">
          <div className="Project_Details">
            <h4 className="Project_Title">TIC TAC TOE</h4>
            <div>
              <p className="Project_Description">
                Developed a Tic Tac Toe game using React with function-based
                components. Implemented player turn tracking and winner
                detection using the "useState" hook. Included features for
                displaying the winner or a draw and a replay option.
              </p>
            </div>
          </div>
          <div className="Project_Buttons">
            <button
              onClick={() => {
                window.open("https://rohan-tik-tac-toe.netlify.app/", "_blank");
              }}
            >
              View Site
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://github.com/RohanGorla/TIC_TAC_TOE",
                  "_blank"
                );
              }}
            >
              Git Repo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Projects);
