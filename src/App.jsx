import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./router";
import { AdProvider } from "./components/adcontext/context"; 

function App() {
  return (
    <AdProvider>
      <RouterProvider router={route} />
    </AdProvider>
  );
}

export default App;
