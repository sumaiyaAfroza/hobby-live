import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 mb-10 z-50">
      {/* Logo/Name */}
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        HobbyHub
      </Link>

      {/* Links */}
      <ul className="flex items-center gap-6 text-gray-700">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/groups">All Groups</Link>
        </li>
        {
          user && <>
          <li>
          <Link to="/createGroup">Create Group</Link>
        </li>
        <li>
          <Link to={`/myGroups/${user?.uid}`}>My Groups</Link>
        </li>
          </>
        }

        {!user && (
          <li>
            <Link
              to="/login"
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Login / Register
            </Link>
          </li>
        )}

        {user && (
          <li className="flex items-center gap-3">
            <img
              src={user.photoURL}
              alt="user"
              className="w-10 h-10 rounded-full border"
              title={user.displayName}
            />
            <button
              onClick={logOut}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
