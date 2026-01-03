// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";




const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);




  const handleLogout = async () => {
    try {
      // Make a request to the logout endpoint
      const response = await axios.post(
        "https://microfinance-56ai.onrender.com/api/auth/logout",
        {},
        { withCredentials: true }
      );
      navigate("/");
      setOpen(prev => !prev);
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className=" w-full h-16  flex justify-between items-center px-4 relative">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Saylani <span className="text-amber-700">Microfinance</span></Link>
        </div>
        {/* Links */}
        <div className="flex space-x-4">
          {!isLoggedIn ? <Link to="/login" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
            Login
          </Link> : null}
         {!isLoggedIn ?  <Link to="/signup" className="hidden md:block px-4 py-2 bg-green-500 rounded hover:bg-green-600">
            Register
          </Link> : null}
          {isLoggedIn && <div
            className="ml-4 w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setOpen(prev => !prev)}>
            <span className="flex  items-center justify-center">{user.trim().charAt(0).toUpperCase()}</span>
          </div>}

          <div className={`
          absolute top-[4.1rem] w-64 bg-gray-800 shadow-lg rounded
          transition-[right] duration-300 ease-in-out z-50
          ${open ? "right-0" : "-right-72"}
        `}>
            <ul>
              <li>{isLoggedIn && <span className="ml-4 flex items-center gap-2"><FaUser /> {user}</span>}
              </li>
              <li><Link to="/settings" className=" px-4 py-2 hover:bg-gray-700 flex items-center gap-2"><IoMdSettings /> <span>Settings</span></Link></li>
              <li><button onClick={handleLogout} className="px-4 py-2 cursor-pointer hover:bg-gray-700 w-full text-left">
            Logout
          </button></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;