// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import {  useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";




const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


 

  const handleLogout = async () => {
    setLoading(true);
    try {
      // Make a request to the logout endpoint
      const response = await axios.post(
        "https://microfinance-56ai.onrender.com/api/auth/logout",
        {},
        { withCredentials: true }
      );
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container w-full h-16  flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Saylani <span className="text-amber-700">Microfinance</span></Link>
        </div>
        {/* Links */}
        <div className="flex space-x-4">
          {!isLoggedIn ? <Link to="/login" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
            Login
          </Link> : <button onClick={handleLogout} className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
            Logout
          </button>}
          <Link to="/signup" className="hidden md:block px-4 py-2 bg-green-500 rounded hover:bg-green-600">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;