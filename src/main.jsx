import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />}/>
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
