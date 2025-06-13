import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({}); // Example: could be "logistics" or "commander"

  useEffect(() => {
    const accessToken = Cookies.get("baseToken");
    console.log(user);
    if (accessToken) {
      setToken(accessToken);
      setLoggedIn(true);
    }
  }, [user]);

  const value = {
    navigate,
    user,
    loggedIn,
    setUser,
    backendUrl,
    token,
    setLoggedIn,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
