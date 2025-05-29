import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className=" dark:bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-indigo-700 dark:text-white mb-4">HobbyHub</h2>
          <p className="text-sm text-black dark:text-white">
            HobbyHub is your go-to platform to discover or create local hobby groups.
            Share your passion and connect with like-minded people.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-black dark:text-white">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/groups" className="hover:underline">All Groups</Link></li>
            <li><Link to="/create-group" className="hover:underline">Create Group</Link></li>
            <li><Link to="/my-groups" className="hover:underline">My Groups</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h2 className="text-xl font-bold text-black dark:text-white mb-4">Connect With Us</h2>
          <p className="text-sm mb-2 text-black dark:text-white">Email: support@hobbyhub.com</p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-800 mt-8 border-t border-gray-600 pt-4 dark:text-white">
        © {new Date().getFullYear()} HobbyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
