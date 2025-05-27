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
