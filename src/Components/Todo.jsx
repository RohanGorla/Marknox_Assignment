import React from "react";
import "../styles/Todo.css";
import TD_1 from "../assets/Todo_List_Signin.png";
import TD_2 from "../assets/Todo_Starting_Interface.png";
import TD_3 from "../assets/Todo_List_Item_View.png";

function Todo() {
  return (
    <div className="Todo_Main">
      <div className="Todo_Header">
        <h1>PERSONAL TODO APP</h1>
      </div>
      <div className="Todo_Section">
        <p className="Todo_Desc">
          I developed a To-Do Lists application using React.js, focusing on
          providing a user-friendly interface and robust functionality for
          managing tasks. The application allows users to create multiple lists
          and add multiple todo-items to each list, catering to various
          organizational needs.
        </p>
        <div className="Todo_Image">
          <img src={TD_1}></img>
        </div>
      </div>
      <div className="Todo_Section">
        <p className="Todo_Desc">
          To manage the application's state effectively, I utilized React hooks
          such as useState for state management. This hook was crucial for
          dynamically updating the user interface as users interacted with the
          app, ensuring a seamless and responsive experience. Additionally, I
          employed the useEffect hook to handle side effects, particularly for
          fetching data from an AWS MySQL Relational Database. This integration
          allowed the application to retrieve and display existing lists and
          items, providing a persistent and reliable data source.
        </p>
        <div className="Todo_Image">
          <img src={TD_2}></img>
        </div>
      </div>
      <div className="Todo_Section">
        <p className="Todo_Desc">
          The core of the application's functionality revolves around
          implementing CRUD - Create, Read, Update, Delete operations. These
          operations are essential for managing interactions with the database,
          allowing users to create new lists and items, read and display
          existing ones, update their details, and delete them as needed.
          Efficiently handling these operations ensures that the application
          remains responsive and data integrity is maintained.
        </p>
        <div className="Todo_Image">
          <img src={TD_3}></img>
        </div>
      </div>
      <div className="Todo_Section">
        <p className="Todo_Desc">
          Ensuring a fully responsive design was another key aspect of the
          development process. I prioritized creating an optimized user
          interface that adapts seamlessly to both mobile and desktop devices.
          This involved designing flexible layouts and utilizing CSS media
          queries to ensure that the application looks and functions well on
          various screen sizes. By doing so, I provided a consistent and
          enjoyable user experience, regardless of the device being used.
        </p>
      </div>
    </div>
  );
}

export default Todo;
