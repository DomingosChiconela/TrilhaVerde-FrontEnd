
import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./router.jsx"; 
import { AuthProvider } from "./Contexts/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
    <RouterProvider router={route} />

    </AuthProvider>
  );
}

export default App;
