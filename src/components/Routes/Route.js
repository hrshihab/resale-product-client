import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import Category from "../Category/Category";
import Home from "../Home/Home";
import IndividualProduct from "../IndividualProduct/IndividualProduct";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path : '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/api/categoryname/:category_name',
                element: <Category></Category>,
                loader: ({params})=>{
                  return  fetch(`http://localhost:5000/api/category/${params.category_name}`)
                }
            },
           {
            path: "/categoryname/:id",
            element:<IndividualProduct></IndividualProduct> ,
            loader: ({params})=>{
                console.log(params)
                return fetch(`http://localhost:5000/api/categoryname/${params.id}` )
                
            }
            
           }
        ]
    },
    {
        path : "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children:[
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    }
])