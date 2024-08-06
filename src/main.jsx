import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  createHashRouter,
} from "react-router-dom";
import App from "./App.jsx";
import About from "./Components/About.jsx";
import "./index.css";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/Marknox_Assignment/" element={<App />} />
//       <Route path="/Marknox_Assignment/about" element={<About />} />
//     </>
//   )
// );

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
