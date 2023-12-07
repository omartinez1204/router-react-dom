/*    Cargar Datos              */
import { redirect, useFetcher } from 'react-router-dom';
import { getContacts, createContact, getContact, updateContact, deleteContact } from '../db/useGetDataFetch'


/*   Método para buscar o filtrar por consulta del usuario  */
/*   Input Search  */
/*   También para cargar todos los usuario */
const loader = async ({ request }) => {
  const url = new URL(request.url)
  const q = url.searchParams.get("q") // obtener el párametro por el name del input: q
  const contacts = await getContacts(q)
  return { contacts, q };
}
/*    Fin Cargar datos          */


/*    Crear Contacto            */
const create = async () => {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`) // lo redireccionamos hacia la pagina de editar para crear un nuevo contacto
}
/*    Fin Crear Contacto        */


/*  Buscar por id contacto      */
const searchById = async ({ params }) => {

  const contact = await getContact(params.contactId)
//Todo: Si el contacto no existe: por ejemplo https://localhost:1730/contacts/nulluser
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "El Contacto No Existe"
    })
  }
  return { contact }
}
/*  Fin de Buscar Por ID        */


/*    actualizar Contacto            */
const update = async ({ request, params }) => {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  await updateContact(params.contactId, updates)
  return redirect(`/contacts/${params.contactId}`)
}
/*    Fin actualizar                */

/*    Eliminar Contacto            */
const deleteOneContact = async ({ params }) => {
  await deleteContact(params.contactId)
  return redirect('/')
}
/*    Fin Eliminar                 */

/*   Actualizar el contacto FAVORITO */

const actionUpdateFavorite = async ({ request, params }) => {
  let formData = await request.formData()
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true"
  });
}


export {
  loader,
  create,
  searchById,
  update,
  deleteOneContact,
  actionUpdateFavorite
}
