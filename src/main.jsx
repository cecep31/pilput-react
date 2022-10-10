import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import About from "./routes/about";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/router",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [
//       {
//         path: "router/contacts/:contactId",
//         element: <Contact />,
//         loader: contactLoader,
//       },
//       {
//         path: "router/contacts/:contactId/edit",
//         element: <EditContact />,
//         loader: contactLoader,
//         action: editAction,
//       },
//     ],
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
