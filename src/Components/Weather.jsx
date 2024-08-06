import React from "react";
import "../styles/Weather.css";
import W_1 from "../assets/Weather_Starting.png";
import W_2 from "../assets/Weather_Report_1.png";
import W_3 from "../assets/Weather_Report_2.png";

function Weather() {
  return (
    <div className="Weather_Main">
      <div className="Weather_Header">
        <h1>PERSONAL TODO APP</h1>
      </div>
      <div className="Weather_Section">
        <p className="Weather_Desc">
          I developed a weather application using React.js, designed to provide
          accurate and up-to-date weather information for user-specified
          locations. The application allows users to input a location, and it
          dynamically retrieves and displays the relevant weather data.
        </p>
        <div className="Weather_Image">
          <img src={W_1}></img>
        </div>
      </div>
      <div className="Weather_Section">
        <p className="Weather_Desc">
          To manage user input and ensure real-time updates, I utilized the
          useState hook. This hook plays a crucial role in capturing user input
          and updating the API fetch URL dynamically based on the user's
          specified location. This dynamic URL construction enables the
          application to fetch the latest weather data for the requested area.
          For fetching data, I leveraged the useEffect hook. This hook handles
          the side effects of making asynchronous requests to an external
          weather API whenever the input changes. By doing so, the application
          fetches and displays the most current weather information, including
          temperature, conditions, and other relevant data. Additionally, I
          utilized an NPM package to retrieve and display country and location
          names, ensuring that users receive accurate and descriptive
          information about their selected area.
        </p>
        <div className="Weather_Image">
          <img src={W_2}></img>
        </div>
      </div>
      <div className="Weather_Section">
        <p className="Weather_Desc">
          The application provides not only current weather details but also an
          hourly forecast for the day, offering users a comprehensive view of
          the weather conditions throughout the day. This feature enhances the
          utility of the application by allowing users to plan their day
          accordingly.
        </p>
        <div className="Weather_Image">
          <img src={W_3}></img>
        </div>
      </div>
      <div className="Weather_Section">
        <p className="Weather_Desc">
          A significant focus was placed on ensuring the application's
          responsiveness. The design is fully responsive, adapting seamlessly to
          both mobile and desktop devices. This was achieved by implementing
          flexible layouts and utilizing CSS media queries, ensuring that the
          application delivers an optimized user experience regardless of the
          device being used.
        </p>
      </div>
    </div>
  );
}

export default Weather;
