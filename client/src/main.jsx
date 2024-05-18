import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "react-toastify/ReactToastify.css"; // do I need to add 'dist' folder to path?
import "./index.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-center" />
  </React.StrictMode>
);
