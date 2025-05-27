import React, { use } from "react";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";

const Update = () => {
  const { user } = use(AuthContext)
  const group = useLoaderData();

  const {
    _id,
    groupName,
    category,
    description,
    location,
    maxMembers,
    startDate,
    imageUrl,
    userName,
  } = group;

  const handleUpdateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedGroup = Object.fromEntries(formData.entries());
    updatedGroup.uid = user?.uid;

    fetch(`http://localhost:3000/updateGrp/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedGroup),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success("Group updated successfully!");
        } else {
          toast.error("No changes made or update failed.");
        }
      })
      .catch(error => {
        console.error("Update failed:", error);
        toast.error("An error occurred while updating the group.");
      });
  };

  return (
    <div className="w-11/12 max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Update Hobby Group
      </h2>
      <form onSubmit={handleUpdateGroup} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Group Name */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Group Name</span>
          </label>
          <input
            name="groupName"
            type="text"
            defaultValue={groupName}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Hobby Category */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Hobby Category</span>
          </label>
          <select
            name="category"
            className="select select-bordered w-full"
            defaultValue={category || ""}
            required
          >
            <option value="" disabled>Select a category</option>
            <option>Drawing & Painting</option>
            <option>Photography</option>
            <option>Video Gaming</option>
            <option>Fishing</option>
            <option>Running</option>
            <option>Cooking</option>
            <option>Reading</option>
            <option>Writing</option>
          </select>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            rows={4}
            defaultValue={description}
            required
          ></textarea>
        </div>

        {/* Meeting Location */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Meeting Location</span>
          </label>
          <input
            name="location"
            type="text"
            defaultValue={location}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Max Members */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Max Members</span>
          </label>
          <input
            name="maxMembers"
            type="number"
            defaultValue={maxMembers}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Start Date</span>
          </label>
          <input
            name="startDate"
            type="date"
            defaultValue={startDate?.split("T")[0]}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Image URL</span>
          </label>
          <input
            name="imageUrl"
            type="text"
            defaultValue={imageUrl}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* User Name (Readonly) */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Your Name</span>
          </label>
          <input
            name="userName"
            type="text"
            value={user?.displayName || userName || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* User Email (Readonly) */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Your Email</span>
          </label>
          <input
            name="userEmail"
            type="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Update Button */}
        <div className="md:col-span-2 text-center mt-4">
          <button type="submit" className="btn btn-success px-10">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
// import React, { useContext, useState } from "react";
// import { AuthContext } from "../Context/AuthProvider";
// import Swal from "sweetalert2";
// import { useLoaderData } from "react-router";

// const Update = () => {
//   const data = useLoaderData()
//   console.log(data)
//   // const {_id,groupName,category,description,location,maxMembers,startDate,imageUrl,} = useLoaderData()
  
//   const { user } = useContext(AuthContext);

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
//       uid: user?.uid || "",
//     };

//     fetch(`http://localhost:3000/hobbies/${_id}`, {
//       method: "PUT",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(groupData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount) {
//           Swal.fire({
//             title: "Your Group Created Successfully!",
//             icon: "success",
//             draggable: true,
//           });
//         }
//       });
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
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
//       <div className="w-full max-w-3xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
//         <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 text-center">
//           Create Hobby Group
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Group Name */}
//           <div>
//             <label className="block mb-1 font-medium dark:text-gray-200">
//               Group Name
//             </label>
//             <input
//               type="text"
//               name="groupName"
//               required
//               value={formData.groupName}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
//             />
//           </div>
//           {/* Hobby Category */}
//           <div>
//             <label className="block mb-1 font-medium dark:text-gray-200">
//               Hobby Category
//             </label>
//             <select
//               name="category"
//               required
//               value={formData.category}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
//             >
//               <option value="" disabled>
//                 Select a category
//               </option>
//               {categories.map((cat, idx) => (
//                 <option key={idx} value={cat}>
//                   {cat}
//                 </option>
//               ))}
//             </select>
//           </div>
//           {/* Description */}
//           <div>
//             <label className="block mb-1 font-medium dark:text-gray-200">
//               Description
//             </label>
//             <textarea
//               name="description"
//               required
//               rows="3"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
//               placeholder="Write something about this group..."
//             ></textarea>
//           </div>
//           {/* Meeting Location */}
//           <div>
//             <label className="block mb-1 font-medium dark:text-gray-200">
//               Meeting Location
//             </label>
//             <input
//               type="text"
//               name="location"
//               required
//               value={formData.location}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
//             />
//           </div>
//           {/* Max Members */}
//           <div>
//             <label className="block mb-1 font-medium dark:text-gray-200">
//               Max Members
//             </label>
//             <input
//               type="number"
//               name="maxMembers"
//               required
//               min="1"
//               value={formData.maxMembers}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
//             />
//           </div>
//           {/* Start Date */}
//           <div>
//             <label className="block mb-1 font-medium dark:text-gray-200">
//               Start Date
//             </label>
//             <input
//               type="date"
//               name="startDate"
//               required
//               value={formData.startDate}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
//             />
//           </div>
//           {/* Image URL */}
//           <div>
//             <label className="block mb-1 font-medium dark:text-gray-200">
//               Image URL
//             </label>
//             <input
//               type="url"
//               name="imageUrl"
//               value={formData.imageUrl}
//               onChange={handleChange}
//               className="w-full border px-4 py-2 rounded-xl focus:ring-indigo-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
//               placeholder="https://example.com/image.jpg"
//             />
//           </div>
//           {/* User Info */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block mb-1 font-medium dark:text-gray-200">
//                 User Name
//               </label>
//               <input
//                 type="text"
//                 readOnly
//                 value={user?.displayName || "Anonymous"}
//                 className="w-full bg-gray-100 dark:bg-gray-700 dark:text-white border px-4 py-2 rounded-xl dark:border-gray-600"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 font-medium dark:text-gray-200">
//                 User Email
//               </label>
//               <input
//                 type="email"
//                 readOnly
//                 value={user?.email || "Unavailable"}
//                 className="w-full bg-gray-100 dark:bg-gray-700 dark:text-white border px-4 py-2 rounded-xl dark:border-gray-600"
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

// export default Update;