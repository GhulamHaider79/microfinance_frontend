import { createContext, useState, useEffect, } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const res = await axios.get(
        "https://microfinance-56ai.onrender.com/api/auth/me",
        { withCredentials: true }
      );
      setIsLoggedIn(true);
      setUser(res.data.user.fullName);
      console.log("Auth Res",res);
      
    } catch {
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  // Runs on page refresh
  useEffect(() => {
    checkAuth();
  }, []);



  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, checkAuth, loading, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
