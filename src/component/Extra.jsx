import React from 'react'

// Dummy category data
const categories = [
  { name: "Art & Craft", icon: "🎨" },
  { name: "Music", icon: "🎸" },
  { name: "Photography", icon: "📸" },
  { name: "Travel", icon: "⛰️" },
  { name: "Books", icon: "📚" },
  { name: "Sports", icon: "🏀" },
];

const Extra = () => {
  return (
    <>
      {/* Section 1: Explore Categories */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">
            Explore by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition text-center"
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <h3 className="text-lg font-semibold text-gray-700">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 2: Why Join HobbyHub */}
      <section className="py-14 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">
            Why Join HobbyHub?
          </h2>
          <p className="text-gray-700 mb-10 max-w-xl mx-auto">
            HobbyHub is more than a platform. It's a community where passion meets people.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-indigo-700">
                🌐 Connect Locally
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Meet people nearby who share your hobbies and passions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-indigo-700">
                💡 Learn & Share
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Exchange knowledge, ideas, and fun with group members.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-indigo-700">
                🚀 Grow Your Group
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Create and manage your hobby groups with ease and style.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Extra;



