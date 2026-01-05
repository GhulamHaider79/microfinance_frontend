import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://microfinance-56ai.onrender.com/api/auth/me",
          { withCredentials: true }
        );
        // prefer the whole user object if available
        setUserData(res.data.user || null);
      } catch (err) {
        setError(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    if (isLoggedIn) fetchUser();
    else setLoading(false);
  }, [isLoggedIn]);

  if (loading) return <div className="p-6">Loading profile...</div>;
  if (!isLoggedIn) return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Not signed in</h2>
      <p className="mb-4">Please <Link to="/login" className="text-blue-600">login</Link> to view your profile.</p>
    </div>
  );

  if (error) return <div className="p-6 text-red-600">Error loading profile: {String(error)}</div>;

  const name = userData?.fullName || userData || "-";
  const email = userData?.email || "-";
  const phone = userData?.phone || "-";

  const initial = typeof name === 'string' && name.trim().length ? name.trim().charAt(0).toUpperCase() : '?';

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="w-32 h-32 rounded-full bg-amber-700 flex items-center justify-center text-4xl text-white font-semibold">
          {initial}
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-sm text-gray-600">Member / Borrower</p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div>
              <span className="block text-gray-500">Email</span>
              <span className="font-medium">{email}</span>
            </div>
            <div>
              <span className="block text-gray-500">Phone</span>
              <span className="font-medium">{phone}</span>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <Link to="/update-borrower-info" className="px-4 py-2 bg-blue-600 text-white rounded">Edit Profile</Link>
            <Link to="/loanPage" className="px-4 py-2 border border-gray-300 rounded">My Loans</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
