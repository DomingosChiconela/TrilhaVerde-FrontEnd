import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/home";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

]);
