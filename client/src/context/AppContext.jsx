import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  useEffect(() => {
    const accessToken = Cookies.get("baseToken");
    console.log(accessToken);
    if (accessToken) {
      setUser(true);
    }
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    backendUrl,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
