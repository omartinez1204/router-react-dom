/*    Cargar Datos              */
import { redirect } from 'react-router-dom';
import { getContacts, createContact, getContact, updateContact } from '../db/useGetDataFetch'

const loader = async()=> {
  const contacts = await getContacts()
  return {contacts};
}
/*    Fin Cargar datos          */


/*    Crear Contacto            */
const create = async() =>{
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`) // lo redireccionamos hacia la pagina de editar para crear un nuevo contacto
}
/*    Fin Crear Contacto        */


/*  Buscar por id contacto      */
const searchById = async({params})=>{
  const contact = await getContact(params.contactId)
  return {contact}
}
/*  Fin de Buscar Por ID        */


/*    actualizar Contacto            */
const update = async({request, params}) =>{
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  await updateContact(params.contactId, updates)
  return redirect(`/contacts/${params.contactId}`)
}
/*    Fin actualizar      */



export {
  loader,
  create,
  searchById,
  update
}
