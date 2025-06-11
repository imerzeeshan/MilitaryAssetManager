// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link to="/">Military Asset Manager</Link>
        </div>
        <ul className="flex gap-6 items-center text-sm">
          <li>
            <Link to="/" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/purchases" className="hover:underline">
              Purchases
            </Link>
          </li>
          <li>
            <Link to="/transfers" className="hover:underline">
              Transfers
            </Link>
          </li>
          <li>
            <Link to="/assignments" className="hover:underline">
              Assignments
            </Link>
          </li>
          <li>
            <Link to="/expenditures" className="hover:underline">
              Expenditures
            </Link>
          </li>
          {user?.role === "admin" && (
            <li>
              <Link to="/admin" className="text-yellow-400 hover:underline">
                Admin Panel
              </Link>
            </li>
          )}
          <li>
            <button className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 text-sm">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
