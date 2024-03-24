import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import SignUpPage from "./pages/authPages/signUpPage/SignUpPage";
import LoginPage from "./pages/authPages/loginPage/LoginPage";
import React from "react";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage></LoginPage> },
  { path: "/signup", element: <SignUpPage></SignUpPage> },
  { path: "/login", element: <Navigate to="/"></Navigate> },
  { path: "/home", element: <Home></Home> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
