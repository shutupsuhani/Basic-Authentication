import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
/* import all components */
import Password from './components/password'
import Pagenotfound from './components/pagenotfound'
import Register from './components/register'
import Reset from './components/reset'
import Recovery from './components/recovery'
import Username from './components/username'
import Profile from './components/profile'

/* route router*/
const router=createBrowserRouter([
        {
            path:"/",
            element:<Username></Username>
        },
        {
            path:"/register",
            element:<Register></Register>
        
        },
        {
            path:"/password",
            element:<Password></Password>
        },
        {
            path:"/profile",
            element:<Profile></Profile>
        },
        {
            path:"/reset",
            element:<Reset></Reset>
        },
        {
            path:"/recovery",
            element:<Recovery></Recovery>
        },
        {
            path:"/pagenotfound",
            element:<Pagenotfound></Pagenotfound>
        }
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
