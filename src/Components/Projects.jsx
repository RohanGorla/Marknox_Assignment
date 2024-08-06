import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";

function Projects(props, ref) {
  return (
    <div ref={ref} className="projects">
      <h2 className="Projects_Main_Title">Projects</h2>
      <div className="Projects_Container">
        <div className="Project_Card">
          <div className="Project_Details">
            <h4 className="Project_Title">TODO LIST APP</h4>
            <p className="Project_Description">
              A To-Do Lists application that enables users to create multiple
              lists and items. Provided user authentication for secure access.
              The data is fetched from an AWS MySQL database using CRUD
              operations. The design is responsive for usage on any device.
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
              Live Site
            </button>
            <button
            // onClick={() => {
            //   window.open(
            //     "https://github.com/RohanGorla/LISTS_APP",
            //     "_blank"
            //   );
            // }}
            >
              <Link to={"/todo"} target="_blank" className="View_Project_Link">
                View project
              </Link>
            </button>
          </div>
        </div>
        <div className="Project_Card">
          <div className="Project_Details">
            <h4 className="Project_Title">Weather App</h4>
            <p className="Project_Description">
              A fully responsive weather application that shows accurate weather
              data based on user input. Used an NPM package for location names
              and weather data is fetched from an API. It displayes current
              weather conditions and hourly forecasts.
            </p>
          </div>
          <div className="Project_Buttons">
            <button
              onClick={() => {
                window.open("https://rohan-weather-app.netlify.app/", "_blank");
              }}
            >
              Live Site
            </button>
            <button
            // onClick={() => {
            //   window.open(
            //     "https://github.com/RohanGorla/Weather_App",
            //     "_blank"
            //   );
            // }}
            >
              <Link
                to={"/weather"}
                target="_blank"
                className="View_Project_Link"
              >
                View project
              </Link>
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
              Live Site
            </button>
            <button
              onClick={() => {
                window.open(
                  `${window.location.origin}/Marknox_Assignment/#/tictactoe`
                );
              }}
              // onClick={() => {
              //   window.open(
              //     "https://github.com/RohanGorla/TIC_TAC_TOE",
              //     "_blank"
              //   );
              // }}
            >
              {/* <Link
                to={"/tictactoe"}
                target="_blank"
                className="View_Project_Link"
              >
                View project
              </Link> */}
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Projects);
