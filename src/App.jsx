import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRouter";
import "./App.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
