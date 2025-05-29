import React, { useContext, useState } from "react";
import { Link } from "react-router"; // ✅ Correct import
import { AuthContext } from "../Context/AuthProvider";
import { ThemeContext } from "../Context/Theme";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          HobbyHub
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl text-gray-800 dark:text-white"
          >
            {menuOpen ? "×" : "≡"}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/groups">All Groups</Link></li>

          {user && (
            <>
              <li><Link to="/createGroup">Create Group</Link></li>
              <li><Link to={`/myGroups/${user.uid}`}>My Groups</Link></li>
            </>
          )}

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
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600"
              >
                Logout
              </button>
            </li>
          )}

          <li>
            <button onClick={handleTheme}>
              {theme === "light" ? "🌙" : "🌞"}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-200">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/groups" onClick={toggleMenu}>All Groups</Link></li>

            {user && (
              <>
                <li><Link to="/createGroup" onClick={toggleMenu}>Create Group</Link></li>
                <li><Link to={`/myGroups/${user.uid}`} onClick={toggleMenu}>My Groups</Link></li>
              </>
            )}

            {!user && (
              <li>
                <Link
                  to="/login"
                  onClick={toggleMenu}
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
                  onClick={() => {
                    logOut();
                    toggleMenu();
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            )}

            <li>
              <button onClick={handleTheme}>
                {theme === "light" ? "🌙" : "🌞"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;