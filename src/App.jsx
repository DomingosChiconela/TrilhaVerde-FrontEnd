// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./router"; // Atualize o caminho para o nome correto do arquivo

function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;
