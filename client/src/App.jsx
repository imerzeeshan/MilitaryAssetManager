// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Purchases from "./pages/Purchases";
import Transfers from "./pages/Transfers";
import Assignments from "./pages/Assignments";
import AdminPanel from "./pages/AdminPanel";
import Expenditures from "./pages/Expenditure";

function App() {
  const [user, setUser] = useState({ role: "admin" }); // Example: could be "logistics" or "commander"

  return (
    <Router>
      <Navbar user={user} />
      <main className="p-6">
        <Routes>
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
    </Router>
  );
}

export default App;
