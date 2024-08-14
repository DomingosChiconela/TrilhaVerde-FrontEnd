// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./router.jsx"; // Use a extensão correta se necessário

function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;
