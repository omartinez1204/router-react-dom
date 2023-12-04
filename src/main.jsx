import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home, Error, Contact, Edit } from './pages'
import { loader as loadingData, create as createContact, searchById, update } from './helpers/crud_contacts'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error/>,
        loader: loadingData, // cargando datos a la ruta
        action: createContact, // accion principal, post, crear nuevo contacto
        children: [
            {
                path: 'contacts/:contactId',
                element: <Contact/>,
                loader: searchById,
            },
            {
                path: 'contacts/:contactId/edit',
                element: <Edit/>,
                loader: searchById,
                action: update
            }
        ]
    },
    
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
