import React from 'react'
import Banner from '../component/Banner'
import Extra from '../component/Extra'
import { useLoaderData } from 'react-router'
import Card from '../component/Card'



const Home = () => {
  const loader = useLoaderData()
  return (
    <div className='p-4'>
      <Banner />
      <h1 className='text-xl font-bold text-black dark:text-white'>Welcome</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        {
          loader.slice(0, 6).map((data, i) =>
            <Card key={i} data={data} />
          )
        }
      </div>
      <Extra />
    </div>
  )
}
export default Home