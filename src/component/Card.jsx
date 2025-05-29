import React from 'react';
import { Link } from 'react-router';
import { FaUsers, FaCalendarAlt, FaTag } from 'react-icons/fa';

const Card = ({ data }) => {
  const { _id, imageUrl, category, groupName, maxMembers, startDate } = data;

  return (
    <div>
      
      <div className="max-w-md mx-auto m-5 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
        <img src={imageUrl} alt='' className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold dark:text-gray-100 mb-2">{groupName}</h2>
          
          <div className="group relative text-gray-500 mb-1 flex items-center gap-2">
            <FaTag className="text-indigo-400" />
            <span className="font-medium">Category:</span> {category}
            {/* Tooltip for Category */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-800 dark:bg-gray-700 rounded-md shadow-lg">
              Explore this hobby category!
            </span>
          </div>
          
          <div className="group relative text-gray-500 mb-1 flex items-center gap-2">
            <FaUsers />
            <span className="font-medium">Members:</span> {maxMembers}
            {/* Tooltip for Members */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-800 dark:bg-gray-700 rounded-md shadow-lg">
              Join {maxMembers} passionate members!
            </span>
          </div>
          
          <div className="group relative text-gray-500 mb-4 flex items-center gap-2">
            <FaCalendarAlt />
            <span className="font-medium">Start Date:</span> {startDate}
            {/* Tooltip for Start Date */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-800 dark:bg-gray-700 rounded-md shadow-lg">
              Started on {startDate}!
            </span>
          </div>
          
          <div className="group relative inline-block">
            <Link
              to={`/hobbies/${_id}`}
              className="mt-auto inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              See More
            </Link>
            {/* Tooltip for See More */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-800 dark:bg-gray-700 rounded-md shadow-lg">
              Discover more about this group!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;