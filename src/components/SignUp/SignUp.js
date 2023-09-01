import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const SignUp = () => {
  const {createUser,user}=useContext(AuthContext)
  const { register, handleSubmit ,formState: { errors }} = useForm();
  const handleSignUp=(data)=>{
    console.log(data)
    createUser(data.email,data.password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      savedUser(data.email, data.role)
      toast("User  Created SuccessFul")
    })
    .catch(error => {
      console.lo(error)
    })

  }

    const savedUser = (email, role)=>{
      const user ={email,role}
      fetch('http://localhost:5000/api/users',{
        method: "POST",
        headers: {
          "content-type":"application/json"
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    }

  return (
    <div>
    <h1 className='text-3xl font-bold text-center mt-10'>Sign Up</h1>
   <div className='mt-6 flex justify-center items-center'>
   <div className='w-96 p-7 shadow-lg'> 
   <form onSubmit={handleSubmit(handleSignUp)}>

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Your Email</span>
</label>
<input type="text"  {...register("email",{ required: "Email Address is required" })} placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
{errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Your Password</span>
</label>
<input type="password"  {...register("password",{ required: "Password  is required" , minLength:{value:6, message: "Password must be 6 Characters"}})} placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
{errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
</div>   

<div>

</div>

<select   type="text"  {...register("role",{ required: "Role select is required" })} className="select select-bordered mt-4 w-full max-w-xs">
<option disabled selected>Sign Up As a?</option>

  <option>Seller</option>
  <option>Buyer</option>
  
</select>

{/* <p>{data}</p> */}
<input className='btn color-lime-500	mt-4 w-full' value='Sign Up' type="submit" />
</form>
<p className='text-primary'>ALready Have an Account ?<Link to='/login'>Login Here</Link></p>
<div className="divider">OR</div>

   </div>
   </div>
</div>
  )
}

export default SignUp