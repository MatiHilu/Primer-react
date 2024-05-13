import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CardBody } from "./components/Card.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from "./components/NotFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/card",
    element: <CardBody text="hola" title="bu" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
/*
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
