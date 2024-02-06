import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import {Home, Candidates} from '../pages'
import Login from '../components/Login/Login'




const Navigation = () => {

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/candidatos",
            element: <Candidates/>,
        },
        {
            path: "/login",
            element: <Login/>
        },
       
    ])

  return <RouterProvider router={routes} />
    
}

export default Navigation
