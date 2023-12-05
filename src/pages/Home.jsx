
import { Outlet, NavLink, useLoaderData, Form, useNavigation } from 'react-router-dom'

export const Home = () => {

  /*    obtener los contactos del loader, router       */
  const { contacts } = useLoaderData()
  /* Para que se pueda hacer scroll al sidebar contacts */
  const navitation = useNavigation()

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
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
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
        className={ navitation.state === "loading" ? 'loading': '' }
      >
        {/* Para que los hijos de las rutas se rendericen aquí */}
        <Outlet />

      </div>
    </>
  )
}


