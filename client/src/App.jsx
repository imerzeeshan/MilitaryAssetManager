// src/App.jsx
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Purchases from "./pages/Purchases";
import Transfers from "./pages/Transfers";
import Assignments from "./pages/Assignments";
import AdminPanel from "./pages/AdminPanel";
import Expenditures from "./pages/Expenditure";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { user } = useContext(AppContext);
  return (
    <div>
      <Navbar user={user} />
      <main className="p-6">
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/expenditures" element={<Expenditures />} />
          <Route
            path="/admin"
            element={
              user.role === "admin" ? <AdminPanel /> : <div>Access Denied</div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
