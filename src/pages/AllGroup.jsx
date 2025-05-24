import React from 'react'
import { useLoaderData } from 'react-router'
import Card from '../component/Card'

const AllGroup = () => {
  const loader = useLoaderData()
  // console.log(loader)
  // const[hobby,setHobby] = useState(loader)

  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      {
       loader.map(data => <Card data={data}></Card>)
      }
    </div>
  )
}
export default AllGroup
