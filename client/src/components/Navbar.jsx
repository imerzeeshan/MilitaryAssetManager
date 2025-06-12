// src/components/Navbar.jsx
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Lucide icons (optional for hamburger)
import { AppContext } from "../context/AppContext";

const Navbar = ({ onLogout }) => {
  const { user, setUser } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(false);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link to="/">Military Asset Manager</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <ul className="hidden md:flex gap-6 items-center text-sm">
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
          {!user ? (
            <>
              <li>
                <Link
                  to="/login"
                  className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="bg-green-600 px-3 py-1 rounded hover:bg-green-700"
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 text-sm"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-sm">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/purchases"
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              Purchases
            </Link>
          </li>
          <li>
            <Link
              to="/transfers"
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              Transfers
            </Link>
          </li>
          <li>
            <Link
              to="/assignments"
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              Assignments
            </Link>
          </li>
          <li>
            <Link
              to="/expenditures"
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              Expenditures
            </Link>
          </li>
          {user?.role === "admin" && (
            <li>
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="text-yellow-400 hover:underline"
              >
                Admin Panel
              </Link>
            </li>
          )}
          {!user ? (
            <>
              <li>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="bg-green-600 px-3 py-1 rounded hover:bg-green-700"
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 text-sm"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
