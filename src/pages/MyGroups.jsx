import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import SingleAddedGrp from '../component/SingleAddedGrp'

const MyGroups = () => {
  const data = useLoaderData()
  const [userAddedData,setUserAddedData] = useState(data)
  console.log(userAddedData)


  const handleDeleteUserTaskData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://a10-hobbyhub-server.vercel.app/myGroups/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              toast.success("Task Deleted successfully");
              const remainingUsersTask = userAddedData.filter(
                (singleData) => singleData._id !== id
              );
              setUserAddedData(remainingUsersTask);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your Task has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="p-4 h-screen my-8">
      <h1 className='text-center text-2xl font-semibold'>Create your Group</h1>
      {userAddedData.length === 0 ? (
        <div className="flex flex-col justify-center items-center text-center bg-transparent rounded-2xl shadow p-6">
          
          <Link
            to="/createGroup"
            className="btn btn-primary"
          >
          create
          </Link>
        </div>
      ) : (
        <div className="mt-5 flex flex-col text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">

          </h2>
        <div className="overflow-x-auto rounded-xl shadow-md mx-10 mt-10 max-h-[70vh] overflow-y-auto">
          
          <table className="table table-zebra text-sm md:text-base w-full">
            <thead className="bg-base-200 text-base font-semibold">
              <tr>
                <th>Group Photo </th>
                <th>Group Name</th>
                <th>Category</th>
                <th>Member</th>
                <th>Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userAddedData.map((singleData) => (
                <SingleAddedGrp
                  key={singleData._id}
                  singleData={singleData}
                  handleDeleteUserTaskData={handleDeleteUserTaskData}
                />
              ))}
            </tbody>
          </table>
        </div>
        <button className='btn btn-primary mx-auto px-3 text-lg'><Link to="/createGroup">create</Link></button>
      </div>
      )}
    </div>
  )
}

export default MyGroups
