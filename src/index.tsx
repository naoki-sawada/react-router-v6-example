import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
// import "./index.css";
import LP from "./views/LP";
import Login from "./views/Login";
import Home from "./views/Home";
import RequireAuth from "./views/RequireAuth";
import { AuthProvider } from "./contexts/Auth";
import AfterLogin from "./views/AfterLogin";
import Layout from "./views/Layout";
import NotFound from "./views/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AfterLogin />}>
            <Route path="/" element={<LP />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
