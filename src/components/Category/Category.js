import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import IndividualProduct from '../IndividualProduct/IndividualProduct'
import Products from '../Products/Products'


const Category = () => {
    const categories = useLoaderData()
    // const [category,setCategory]=useState([])
    // console.log(categories)
    
  return (
    <div className='grid my-10 lg:ml-40 ml-0 lg:grid-cols-2 grid-cols1'>

     {
        categories?.map((d)=>{
          
            return <Products key={d._id} d={d}></Products>
        })
        
     } 
     
    </div>
  )
}

export default Category

 