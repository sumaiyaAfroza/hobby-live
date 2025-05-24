import React from 'react'
import { useLoaderData } from 'react-router'

const Details = () => {
    const dataLoader = useLoaderData()
    console.log(dataLoader)
  return (
    <div>
        <h1>.............</h1>
      
    </div>
  )
}

export default Details
