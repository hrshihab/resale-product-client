import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider'

const Header = () => {

  const {user,logOut}=useContext(AuthContext)


const handleLogOut=()=>{
  logOut()
  .then(()=>{})
  .catch(err => {
    console.log(err)
  })
}

  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {user?.uid && user?.email ?   <li><button onClick={handleLogOut}>
          Sign Out
          </button></li>:
         
          <li><a>
          <Link to='/login'>Login</Link>
          </a></li>
        }
        <li tabIndex={0}>
         
        </li>
        <li><a>  <Link to='/signup'>Sign Up</Link></a></li>
        <li><a>
        <Link to='/dashboard'>Dashboard</Link>
        </a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">
      <Link to='/'>Home</Link>
       </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {user?.uid && user?.email ?  <li><button onClick={handleLogOut}> 
          Sign out
          </button></li>:
          
          <li><a>
          <Link to='/login'>Login</Link>
          </a></li>
        }
      <li tabIndex={0}>
       
      </li>
      <li><a>
        <Link to='/signup'>Sign Up</Link>
        </a></li>
      <li><a>
        <Link to='/dashboard'>Dashboard</Link>
        </a></li>

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
    </div>
  )
}

export default Header