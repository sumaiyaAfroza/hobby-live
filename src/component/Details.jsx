import React from 'react'
import toast from 'react-hot-toast'
import { useLoaderData } from 'react-router'

const Details = () => {
    const dataLoader = useLoaderData()
    console.log(dataLoader)

    const {
    groupName,
    category,
    description,
    location,
    maxMembers,
    startDate,
    imageUrl,
    userName,
    userEmail,
  } = dataLoader

  const isGroupActive = new Date(startDate) > new Date();
  const handleJoinGroup = () => {
    toast.success(`You have requested to join ${groupName}`);
    console.log(`Join request for group: ${groupName}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-xl">
      {/* Image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={groupName}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
      )}

      {/* Title & Category */}
      <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{groupName}</h2>
        <span className="mt-2 md:mt-0 bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white px-3 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800 dark:text-gray-200 mb-6">
        <div>
          <span className="font-medium">📍 Location:</span> {location}
        </div>
        <div>
          <span className="font-medium">👥 Max Members:</span> {maxMembers}
        </div>
        <div>
          <span className="font-medium">📅 Start Date:</span> {startDate}
        </div>
        <div>
          <span className="font-medium">🧑 Created By:</span> {userName}
        </div>
        <div className="md:col-span-2">
          <span className="font-medium">📧 Contact:</span> {userEmail}
        </div>
        {isGroupActive ? (
            <button
              onClick={handleJoinGroup}
              className="btn btn-primary w-full"
            >
              Join Group
            </button>
          ) : (
            <p className="text-red-500 font-semibold text-center w-full">
              This group is no longer active.
            </p>
          )}
      </div>
    </div>
  )
}
export default Details