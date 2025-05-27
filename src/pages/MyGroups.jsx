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
    <div className="p-4 h-screen">
      {userAddedData.length === 0 ? (
        <div className="flex flex-col justify-center items-center text-center bg-transparent rounded-2xl shadow p-6">
          {/* <img
            className="w-80 md:w-[400px] lg:w-[500px] mb-6 opacity-90"
            src="https://i.ibb.co/TDQrPfG2/hand-drawn-no-data-concept-52683-127823-removebg-preview.png"
            alt="No data illustration"
          /> */}
          <Link
            to="/createGroup"
            className="btn btn-primary"
          >
          create
          </Link>
        </div>
      ) : (
        <div className="mt-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">
            My Posted Tasks
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
        <Link to="/createGroup">create</Link>
      </div>
      )}
    </div>





    // <div>
    //  {
    //   data.length === 0 ? <> 
    //   <Link to='/createGroup'> create</Link>
    //   </> : <> <button>{data.length}</button></> 
    //  }
      
    // </div>
  )
}

export default MyGroups
