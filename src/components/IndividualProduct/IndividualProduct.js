import React, { useContext } from 'react'
import { toast } from 'react-hot-toast'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider'

const IndividualProduct = () => {
  const date = new Date();
  const newD = date.toLocaleTimeString(date);
    const {user}=useContext(AuthContext)
    const product = useLoaderData()
    
    console.log(product)

    const handleBooking=(event)=>{
      event.preventDefault();
      const form = event.target
      const name =  form.name.value;
      const email = form.email.value;
      const itemName = form.itemName.value;
      const price = form.price.value;
      const number = form.phone.value;
      const location= form.location.value

      const booking ={
        name: name,
        email: email,
        itemName: itemName,
        price: price,
        number: number,
        location: location,
        time: newD,
        date: date,
      }

    fetch("http://localhost:5000/api/bookingsProduct",{
      method : "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.data.acknowledged){
        
        toast.success("Your Item Added Successfully")
        form.reset()

      }
    })
    }

  return (
    <div className="w-full text-center my-10">
       <form onSubmit={handleBooking} >
       
       <input type="text" name='name' placeholder="Type Your Name" className="input input-bordered input-info w-full max-w-xs" />

        <br/>
       <input type="email" name='email' value={user?.email} placeholder="Your email" disabled className="input input-bordered input-info w-full max-w-xs mt-4" />

       <br/>
       <input type="itemName" name='itemName' value={product?.data?.name} disabled className="input input-bordered input-info w-full max-w-xs mt-4" />
       <br/>
       <input type="price" name='price' value={product?.data?.resale_price} disabled className="input input-bordered input-info w-full max-w-xs mt-4" />
       <br/>
       <input
              type="phone"
              name="phone"
              placeholder="Your Number"
              className="input input-bordered input-info w-full max-w-xs mt-4"
            />
       <br/>
       <input type="location" name='location' placeholder='Your Location' className="input input-bordered input-info w-full max-w-xs mt-4" />
       <br/>
       <input
              type="submit"
              value="submit"
              className="btn btn-active btn-primary mt-4"
            />

      </form>
    </div>
  )
}

export default IndividualProduct