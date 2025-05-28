import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const CreateGroup = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    groupName: "",
    category: "",
    description: "",
    location: "",
    maxMembers: "",
    startDate: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const groupData = {
      ...formData,
      userName: user?.displayName || "Anonymous",
      userEmail: user?.email || "Not Available",
      uid: user?.uid || "",
    };

    fetch("https://a10-hobbyhub-server.vercel.app/hobbies", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(groupData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
        // ✅ Reset the form state
        setFormData({
          groupName: "",
          category: "",
          description: "",
          location: "",
          maxMembers: "",
          startDate: "",
          imageUrl: "",
        });
          Swal.fire({
            title: "Your Group Created Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  const categories = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 text-center">
          Create Hobby Group
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Group Name */}
          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">
              Group Name
            </label>
            <input
              type="text"
              name="groupName"
              required
              value={formData.groupName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>
          {/* Hobby Category */}
          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">
              Hobby Category
            </label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          {/* Description */}
          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">
              Description
            </label>
            <textarea
              name="description"
              required
              rows="3"
              value={formData.description}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Write something about this group..."
            ></textarea>
          </div>
          {/* Meeting Location */}
          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">
              Meeting Location
            </label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>
          {/* Max Members */}
          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">
              Max Members
            </label>
            <input
              type="number"
              name="maxMembers"
              required
              min="1"
              value={formData.maxMembers}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>
          {/* Start Date */}
          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              required
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
          </div>
          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium dark:text-gray-200">
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          {/* User Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium dark:text-gray-200">
                User Name
              </label>
              <input
                type="text"
                readOnly
                value={user?.displayName || "Anonymous"}
                className="w-full bg-gray-100 dark:bg-gray-700 dark:text-white border px-4 py-2 rounded-xl dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium dark:text-gray-200">
                User Email
              </label>
              <input
                type="email"
                readOnly
                value={user?.email || "Unavailable"}
                className="w-full bg-gray-100 dark:bg-gray-700 dark:text-white border px-4 py-2 rounded-xl dark:border-gray-600"
              />
            </div>
          </div>
          {/* Create Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold transition"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;



// import React, { useContext, useState } from "react";
// import { AuthContext } from "../Context/AuthProvider";
// import Swal from "sweetalert2";

// const CreateGroup = () => {
//   const { user } = useContext(AuthContext)

//   const [formData, setFormData] = useState({
//     groupName: "",
//     category: "",
//     description: "",
//     location: "",
//     maxMembers: "",
//     startDate: "",
//     imageUrl: "",
//   });

  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const groupData = {
//       ...formData,
//       userName: user?.displayName || "Anonymous",
//       userEmail: user?.email || "Not Available",
//       uid: user?.uid ||''
//     };
//     console.log("Group Created:", groupData);
//     // তুমি এখানে Firebase বা backend এ পাঠাতে পারো 
//     fetch('https://a10-hobbyhub-server.vercel.app/hobbies',{
//       method: "POST",
//       headers: {"content-type" : "application/json"},
//       body: JSON.stringify(groupData)
//     })
//     .then(res => res.json())
//     .then(data => {
//       if(data.insertedId){
//         console.log('added successfully')
//         Swal.fire({
//                         title: "your Group Created successfully!",
//                         icon: "success",
//                         draggable: true
//                       });
//       }
//     })
//   };

//   const categories = [
//     "Drawing & Painting",
//     "Photography",
//     "Video Gaming",
//     "Fishing",
//     "Running",
//     "Cooking",
//     "Reading",
//     "Writing",
//   ];
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-xl">
//         <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Create Hobby Group</h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Group Name */}
//           <div>
//             <label className="block mb-1 font-medium">Group Name</label>
//             <input
//               type="text"
//               name="groupName"
//               required
//               value={formData.groupName}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none"
//             />
//           </div>
//           {/* Hobby Category */}
//           <div>
//             <label className="block mb-1 font-medium">Hobby Category</label>
//             <select
//               name="category"
//               required
//               value={formData.category}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none"
//             >
//               <option value="" disabled>Select a category</option>
//               {categories.map((cat, idx) => (
//                 <option key={idx} value={cat}>{cat}</option>
//               ))}
//             </select>
//           </div>
//           {/* Description */}
//           <div>
//             <label className="block mb-1 font-medium">Description</label>
//             <textarea
//               name="description"
//               required
//               rows="3"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none"
//               placeholder="Write something about this group..."
//             ></textarea>
//           </div>
//           {/* Meeting Location */}
//           <div>
//             <label className="block mb-1 font-medium">Meeting Location</label>
//             <input
//               type="text"
//               name="location"
//               required
//               value={formData.location}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none"
//             />
//           </div>
//           {/* Max Members */}
//           <div>
//             <label className="block mb-1 font-medium">Max Members</label>
//             <input
//               type="number"
//               name="maxMembers"
//               required
//               min="1"
//               value={formData.maxMembers}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none"
//             />
//           </div>
//           {/* Start Date */}
//           <div>
//             <label className="block mb-1 font-medium">Start Date</label>
//             <input
//               type="date"
//               name="startDate"
//               required
//               value={formData.startDate}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none"
//             />
//           </div>
//           {/* Image URL */}
//           <div>
//             <label className="block mb-1 font-medium">Image URL</label>
//             <input
//               type="url"
//               name="imageUrl"
//               value={formData.imageUrl}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none"
//               placeholder="https://example.com/image.jpg"
//             />
//           </div>
//           {/* User Info (Read-only) */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block mb-1 font-medium">User Name</label>
//               <input
//                 type="text"
//                 readOnly
//                 value={user?.displayName || "Anonymous"}
//                 className="w-full bg-gray-100 border px-4 py-2 rounded-xl"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 font-medium">User Email</label>
//               <input
//                 type="email"
//                 readOnly
//                 value={user?.email || "Unavailable"}
//                 className="w-full bg-gray-100 border px-4 py-2 rounded-xl"
//               />
//             </div>
//           </div>
//           {/* Create Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold transition"
//           >
//             Create Group
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default CreateGroup;