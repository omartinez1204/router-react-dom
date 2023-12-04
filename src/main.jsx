import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home, Error, Contact } from './pages'
import { loader as rootLoader } from './helpers/getContacts'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error/>,
        loader: rootLoader, // cargando datos a la ruta
        children: [
            {
                path: 'contacts/:contactId',
                element: <Contact/>
            }
        ]
    },
    
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
