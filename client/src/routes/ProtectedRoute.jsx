// src/routes/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { currentUser } = useAuth();

  if (!currentUser || !allowedRoles.includes(currentUser.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

// Inside any component
const { currentUser } = useAuth();

{
  currentUser.role === Roles.ADMIN && (
    <button className="bg-red-500 text-white px-4 py-2 rounded">
      Manage Users
    </button>
  );
}

{
  currentUser.role !== Roles.LOGISTICS && (
    <div className="text-gray-700">Summary data for all bases</div>
  );
}

export default ProtectedRoute;
