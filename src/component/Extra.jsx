import React from 'react'
import { FaLightbulb } from 'react-icons/fa';

const tips = [
  {
    title: 'Stay Consistent',
    description: 'Practice your hobby regularly to improve your skills.',
  },
  {
    title: 'Join a Community',
    description: 'Engage with others who share your interests for motivation.',
  },
  {
    title: 'Set Goals',
    description: 'Define clear objectives to track your progress.',
  },
];

const Extra = () => {
  return (
   <div className=' bg-gray-50 dark:bg-gray-900'>
     
      {/* Section 1: Explore Categories */}
<section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center">
          <FaLightbulb className="text-yellow-500 mr-2" /> Tips & Tricks
        </h2>
        <ul className="space-y-4">
          {tips.map((tip, index) => (
            <li key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{tip.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{tip.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>


      {/* Section 2: Why Join HobbyHub */}
      <section className="py-14  bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Why Join HobbyHub?
          </h2>
          <p className="dark:text-gray-300 mb-10 max-w-xl mx-auto">
            HobbyHub is more than a platform. It's a community where passion meets people.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white  dark:bg-gray-900 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-indigo-700">
                🌐 Connect Locally
              </h3>
              <p className="text-sm dark:text-gray-400 mt-2">
                Meet people nearby who share your hobbies and passions.
              </p>
            </div>
            <div className="bg-white  dark:bg-gray-900 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-indigo-700">
                💡 Learn & Share
              </h3>
              <p className="text-sm dark:text-gray-400 mt-2">
                Exchange knowledge, ideas, and fun with group members.
              </p>
            </div>
            <div className="bg-white  dark:bg-gray-900 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-indigo-700">
                🚀 Grow Your Group
              </h3>
              <p className="text-sm dark:text-gray-400 mt-2">
                Create and manage your hobby groups with ease and style.
              </p>
            </div>
          </div>
        </div>
      </section>
    
   </div>
  );
};
export default Extra;



