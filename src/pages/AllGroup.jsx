import React from 'react'
import { useLoaderData } from 'react-router'
import Card from '../component/Card'

const AllGroup = () => {
  const loader = useLoaderData()
  // console.log(loader)
  // const[hobby,setHobby] = useState(loader)

  return (
    <div>
      <h1 className='text-center font-bold text-3xl mt-16 mb-6'>All About This Group</h1>
      <div className='grid grid-cols-1 md:grid-cols-3'>
      {
       loader.map(data => <Card data={data}></Card>)
      }
    </div>
    </div>
  )
}
export default AllGroup
