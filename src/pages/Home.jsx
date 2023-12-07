
import { useEffect } from 'react'
import { Outlet, NavLink, useLoaderData, Form, useNavigation, useSubmit } from 'react-router-dom'

export const Home = () => {

  /*    obtener los contactos del loader, router       */
  const { contacts, q } = useLoaderData()
  
  /* Para que se pueda hacer scroll al sidebar contacts */
  const navitation = useNavigation()
  const submit = useSubmit()

  useEffect( ()=>{
    document.getElementById("q").value = q
  }, [q] )  

  /* Agregar el efecto de buscar en tiempo real en el input de busqueda, animacion que gira*/
  const searching = navitation.location && new URLSearchParams(navitation.location.search).has('q')

  return (
    <>
      <div id="sidebar">
        <h1>Rutas En React</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              className={ searching ? "loading" : ""} /* Animación de busqueda de contactos */
              type="search"
              name="q"
              defaultValue={q}
              onChange={ (event)=>{
                const isFirstSearch = q == null; // si es primera busqueda, se queda en la pila de busquedas
                submit(event.currentTarget.form, { replace: !isFirstSearch }) // se remplaza sino es la primera busqueda
              } } /* Cuando escribas el contacto se pone en la url */
            />
            <div id="search-spinner" aria-hidden hidden={ !searching } />
            <div className="sr-only" aria-live="polite" />
          </form>
          <Form method='post'>
            <button type='submit'> Nuevo </button>
          </Form>
        </div>
        <nav>
          {
            contacts.length
              ? (<ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <NavLink
                      to={`contacts/${contact.id}`}
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "active"
                          : isPending
                            ? "pending"
                            : ""
                      }
                    >
                      {
                        contact.first || contact.last
                          ? `${contact.first} ${contact.last}`
                          : 'No name'
                      }
                    </NavLink>
                  </li>
                ))}
              </ul>)
              : (<p> <i> No Contacts</i> </p>)
          }
        </nav>
      </div>
      <div
        id="detail"
        className={navitation.state === "loading" ? 'loading' : ''}
      >
        {/* Para que los hijos de las rutas se rendericen aquí */}
        <Outlet />

      </div>
    </>
  )
}


