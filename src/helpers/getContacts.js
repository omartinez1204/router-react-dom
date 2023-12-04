/*    Cargar Datos              */
import { getContacts } from '../db/useGetDataFetch'

export async function loader() {
  const contacts = await getContacts()
  return {contacts};
}

/*    Fin Cargar datos         */