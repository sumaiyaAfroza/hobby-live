import React from 'react'
import Banner from '../component/Banner'
import Extra from '../component/Extra'
import { useLoaderData } from 'react-router'
import Card from '../component/Card'

const Home = () => {
  const loader = useLoaderData()
  console.log(loader)
 
  
  return (
    <div>
     
      <Banner></Banner>
       <h1>kiiiiiiiiiiiiiiiii</h1>
      <div className='grid grid-cols-1 md:grid-cols-3'>
         {
        loader.slice(0,6).map(data=>
          <Card data={data}> </Card>
        )
       }
      </div>
        <Extra></Extra>
    </div>
  )
}

export default Home