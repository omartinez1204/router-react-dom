import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home, Error, Contact, Edit, Welcome } from './pages'
import { 
    loader as loadingData, 
    create as createContact, 
    searchById, 
    update,
    deleteOneContact,
    actionUpdateFavorite
    } from './helpers/crud_contacts'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error/>,
        loader: loadingData, // cargando datos a la ruta
        action: createContact, // accion principal, post, crear nuevo contacto
        children: [
            {
                index: true,
                element: <Welcome/> /* Para establecer la página por default de Bienvenida */
            },
            {
                path: 'contacts/:contactId',
                element: <Contact/>,
                loader: searchById,
                action: actionUpdateFavorite
            },
            {
                path: 'contacts/:contactId/edit',
                element: <Edit/>,
                loader: searchById,
                action: update
            },
            {
                path: 'contacts/:contactId/destroy',
                action: deleteOneContact,
                errorElement: <div>  Oops! a Ocurrido un error </div>
            }
        ]
    },
    
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
