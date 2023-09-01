import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
  const { register, handleSubmit ,formState: { errors }} = useForm();
  const {userLogin,googleLogin}= useContext(AuthContext)
  const {loginError, setLoginError}=useState('')
const location = useLocation()
const navigate = useNavigate()

const from = location.state?.from?.pathname || '/';

  const handleLogin=(data)=>{
    console.log(data)
    userLogin(data.email,data.password)
    .then(result => {
      const user = result.user;
      console.log(user)
      toast("User Login Successful")
      navigate(from, {replace: true})
    })
    .catch(error =>{
      setLoginError(error)
    })
  }

const handleGoogleLogin =()=>{
  googleLogin()
}

  return (
    <div>
        <h1 className='text-3xl font-bold text-center mt-10'>Login</h1>
       <div className='mt-6 flex justify-center items-center'>
       <div className='w-96 p-7 shadow-lg'> 
       <form onSubmit={handleSubmit(handleLogin)}>
    
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
 <input type="password"  {...register("password",{ required: "Password Address is required" , minLength:{value:6, message: "Password must be 6 Characters"}})} placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
 {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
    </div>   
    <span className="label-text">Forget Password?</span>
    {loginError && <p className='text-red-700'>{loginError}</p> }
<div>

</div>

    {/* <p>{data}</p> */}
    <input className='btn color-lime-500	w-full' value='login' type="submit" />
  </form>
  <p className='text-primary'>New to Here? <Link to='/signup'>Create An Account</Link></p>
  <div className="divider">OR</div>
  <button className='btn color-lime-500	w-full'>Continue With Google</button>
  
       </div>
       </div>
    </div>
  )
}

export default Login