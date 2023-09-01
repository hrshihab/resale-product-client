import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IndividualProduct from '../IndividualProduct/IndividualProduct'

const Products = ({d}) => {
  // const [categories,setCategories] = useState(category)
    
  return (
    <div>
        <div key={d._id} className=''>
                <div class="relative max-w-sm rounded-lg overflow-hidden shadow-md">
            <img class="w-full h-48 object-cover" src={d.picture} alt="Card image"/>
            <div class="absolute inset-1 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div class=" inset-3 mb-6 flex items-center justify-center">
              <div class="bg-white rounded-lg p-6 transform hover:-translate-y-2 transition duration-500">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">{d.name}</h3>
                <p class="text-gray-700">Location:{d.location}</p>
                <p class="text-gray-700">Resale Price:{d.resale_price}</p>
                <p class="text-gray-700">Original price:{d.original_price}</p>
                
                <Link to={`/categoryname/${d._id}`}><button  className='btn btn-primary'>Book Now</button></Link>
                
              </div>
             
            </div>
            
          </div>
            </div> 
            
    </div>
  )
}

export default Products