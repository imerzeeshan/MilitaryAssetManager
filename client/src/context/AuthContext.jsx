// // src/context/AuthContext.jsx
// import React, { createContext, useContext } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const currentUser = {
//     id: 1,
//     name: "Jane Doe",
//     role: "logistics_officer", // change to test RBAC
//     assignedBase: "Base A",
//   };

//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
