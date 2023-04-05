import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import { fetchAllBooks, fetchBook } from "./util/fetchAllBooks";
import Book from "./pages/Book/Book";
import About from "./pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <>this is error page</>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "books",
        element: <Books></Books>,
        loader: fetchAllBooks,
      },
      {
        path: "about",
        element: <About></About>,
        // loader: fetchAllBooks,
      },
      {
        path: "book/:bookId",
        element: <Book></Book>,
        loader: fetchBook,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
