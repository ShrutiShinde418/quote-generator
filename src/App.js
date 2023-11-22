import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import QuotesPage from "./pages/QuotesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/quotes",
    element: <QuotesPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
