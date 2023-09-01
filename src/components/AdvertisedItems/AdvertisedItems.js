import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './AdvertisedItems.css'

const AdvertisedItems = () => {
const [datas, setData]= useState([])

useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setData(data))
},[])


  return (
    <div>
      <div>
        
        <h1 className='font-bold text-center ' >Your Advertised Items</h1>
       <div className='grid lg:grid-cols-3 grid-cols-1 gap-y-10 ml-10	'>
         
        
         {
             datas.map((data) => {
               return <div class="relative max-w-sm rounded overflow-hidden shadow-lg">
               <img class="w-full h-56 object-cover" src={data.picture} alt="Card image"/>
               <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
               <div class=" inset-0 flex mb-6 items-center justify-center">
                 <div class="bg-white rounded-lg p-6 transform hover:-translate-y-2 transition duration-500">
                   <h3 class="text-xl font-semibold text-gray-800 mb-2">Animated Card</h3>
                   <p class="text-gray-700">This is an example of an animated card created using Tailwind CSS.</p>
                 </div>
               </div>
             </div>
             
             
             })
             
         }
        
        
     </div>
     
     </div>
    
    </div>
    
    
  )
}

export default AdvertisedItems



{/* <div > 
                <div class="relative max-w-sm rounded-lg overflow-hidden shadow-md">
              <img class="w-full h-48 object-cover" src={data.picture} alt="Card image"/>
              <div class="absolute inset-1 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <div class="absolute inset-3 flex items-center justify-center">
                <div class="bg-white rounded-lg p-6 transform hover:-translate-y-2 transition duration-500">
                  <h3 class="text-xl font-semibold text-gray-800 mb-2">Animated Card</h3>
                  <p class="text-gray-700">This is an example of an animated card created using Tailwind CSS.</p>
                </div>
              </div>
            </div>
              </div> */}

        