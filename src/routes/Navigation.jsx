import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import {Home, Candidatos} from '../pages'
import Login from '../components/Login/Login'




const Navigation = () => {

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/candidatos",
            element: <Candidatos/>,
        },
        {
            path: "/login",
            element: <Login/>
        },
       
    ])

  return <RouterProvider router={routes} />
    
}

export default Navigation
