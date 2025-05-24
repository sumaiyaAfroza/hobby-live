import React from 'react'
import { Link } from 'react-router'

const SingleAddedGrp = ({singleData,handleDeleteUserTaskData}) => {
    console.log(singleData)
    const {
groupName,category,maxMembers,imageUrl,_id,startDate} = singleData

  return (
    <tr className="hover:bg-base-200 transition duration-200">
  {/* Image Cell */}
  <td className="whitespace-nowrap">
    <img
      src={imageUrl}
      alt=''
      className="w-12 h-12 rounded-md object-cover border"
    />
  </td>

  <td className="font-medium text-base-content whitespace-nowrap">
    {groupName}
  </td>
  <td className="text-base-content/80 whitespace-nowrap">
    {category}
  </td>
  <td className="text-success font-semibold whitespace-nowrap">
   {maxMembers}
  </td>
  <td className="text-base-content/60 whitespace-nowrap">
    {startDate}
  </td>
  <td className="text-center flex items-center justify-center gap-2">
     <button className="btn btn-sm btn-outline btn-accent hover:scale-105 transition-transform">
      Bids
    </button>

    <Link to={`/update/${_id}`}>
      <button className="btn btn-sm btn-outline btn-primary hover:scale-105 transition-transform">
        Update
      </button>
    </Link>

    <button
      onClick={() => handleDeleteUserTaskData(_id)}
      className="btn btn-sm btn-outline btn-error hover:scale-105 transition-transform"
    >
      Delete
    </button>
   
    {/* <span className="inline-block bg-accent text-accent-content text-xs font-semibold px-3 py-1 rounded-full shadow-sm select-none">
      {bidsCount || 0}
    </span> */}
  </td>
</tr>







    // <tr className="hover:bg-base-200 transition duration-200">
    //   <td className="font-medium text-base-content whitespace-nowrap">
    //     {title}
    //   </td>
    //   <td className="text-base-content/80 whitespace-nowrap">
    //     {category}
    //   </td>
    //   <td className="text-success font-semibold whitespace-nowrap">
    //     ${budget}
    //   </td>
    //   <td className="text-base-content/60 whitespace-nowrap">
    //     {deadline}
    //   </td>
    //   <td className="text-center flex items-center justify-center gap-2">
    //     <Link to={`/update/${_id}`}>
    //       <button className="btn btn-sm btn-outline btn-primary hover:scale-105 transition-transform">
    //         Update
    //       </button>
    //     </Link>
    //     <button
    //     //   onClick={() => handleDeleteUserTaskData(_id)}
    //       className="btn btn-sm btn-outline btn-error hover:scale-105 transition-transform"
    //     >
    //       Delete
    //     </button>
    //     <button className="btn btn-sm btn-outline btn-accent hover:scale-105 transition-transform">
    //       Bids
    //     </button>
    //     <span className="inline-block bg-accent text-accent-content text-xs font-semibold px-3 py-1 rounded-full shadow-sm select-none">
    //       {bidsCount || 0}
    //     </span>
    //   </td>
    // </tr>
  )
}

export default SingleAddedGrp
