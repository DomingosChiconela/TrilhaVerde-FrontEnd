// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./router"; 

function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;
