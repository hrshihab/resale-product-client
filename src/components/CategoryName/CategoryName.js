import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryName = () => {
const [categoryNames,setCategoryName]=useState([])

useEffect(()=>{
  fetch("http://localhost:5000/api/categoryname")
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    setCategoryName(data.data)
  })
},[])

  return (
    <div>
        <h1 className='my-4 text-5xl text-center'>Category That You can choose</h1>
        <div className='grid lg:grid-cols-3 grid-cols-1'> 
            {
              categoryNames?.map(categoryName => {
                return <div className="card w-96 bg-base-100 p-6 shadow-xl">
                <div className=" border-dashed border-2 border-indigo-600 ">
                 <Link to={`/api/categoryname/${categoryName.category_name}`}>  <h2 className="text-2xl font-bold text-center  hover:bg-sky-700 hover:text-white">{categoryName.category_name}</h2></Link>
                </div>
              </div>
              })
            }
        </div>

    </div>
  )
}

export default CategoryName