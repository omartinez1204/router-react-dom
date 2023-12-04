
import { Outlet, Link, useLoaderData } from 'react-router-dom'

export const Home = () => {

  /*    obtener los contactos del loader, router       */
  const {contacts} = useLoaderData()

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
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          {
            contacts.length
              ? (<ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <Link to={`contacts/${contact.id}`} />
                    {
                      contact.first || contact.last
                        ? (<>
                          {contact.first} {contact.last}
                        </>)
                        : (<i> No name </i>)} {" "}
                  </li>
                ))}
                </ul>)
              : (<p> <i> No Contacts</i> </p>)
          }
        </nav>
      </div>
      <div id="detail">
        {/* Para que los hijos de las rutas se rendericen aquí */}
        <Outlet />
      </div>
    </>
  )
}


