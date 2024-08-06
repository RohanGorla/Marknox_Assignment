import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "./Components/About.jsx";
import Todo from "./Components/Todo.jsx";
import TicTacToe from "./Components/TicTacToe.jsx";
import Weather from "./Components/Weather.jsx";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/weather",
    element: <Weather />,
  },
  {
    path: "/tictactoe",
    element: <TicTacToe />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
