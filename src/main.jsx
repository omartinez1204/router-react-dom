import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home, Error, Contact } from './pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error/>
    },
    {
        path: 'contacts/:contactId',
        element: <Contact/>
    },
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
