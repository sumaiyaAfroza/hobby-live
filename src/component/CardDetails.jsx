import React from 'react'
import { useLoaderData } from 'react-router'
import Details from './Details'

const CardDetails = () => {
    const loader = useLoaderData()
    console.log(loader)
  return (
    <div>

        {
            loader.map(hbcard => <Details hbcard={hbcard}></Details> )
        }
      
    </div>
  )
}

export default CardDetails
