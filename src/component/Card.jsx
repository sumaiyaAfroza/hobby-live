import React from 'react'
import { Link } from 'react-router';
import { FaUsers, FaCalendarAlt, FaTag } from 'react-icons/fa'; // react-icons থেকে কিছু আইকন ইমপোর্ট

const Card = ({ data }) => {
  const { _id, imageUrl, category, groupName, maxMembers, startDate } = data;

  return (
    <div>
      <div className="max-w-md mx-auto m-5 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">  
        <img src={imageUrl} alt='' className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold dark:text-gray-100 mb-2">{groupName}</h2>
          
          <p className="text-gray-500 mb-1 flex items-center gap-2">
            <FaTag className="text-indigo-400" />
            <span className="font-medium">Category:</span> {category}
          </p>
          
          <p className="text-gray-500 mb-1 flex items-center gap-2">
            <FaUsers  />
            <span className="font-medium">Members:</span> {maxMembers}
          </p>
          
          <p className="text-gray-500 mb-4 flex items-center gap-2">
            <FaCalendarAlt/>  
            <span className="font-medium">Start Date:</span> {startDate}
          </p>
          
          <Link
            to={`/hobbies/${_id}`}
            className="mt-auto inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
