import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import {Home, Candidates} from '../pages'
import Login from '../components/Login/Login'
import NotFound from '../pages/NotFound/NotFound'




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
        {
            path: "/*",
            element: <NotFound/>
        },

       
    ])

  return <RouterProvider router={routes} />
    
}

export default Navigation
