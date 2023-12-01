
import { Outlet, Link } from 'react-router-dom'

export const Home = () => {
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
          <ul>
            <li>
              {/* <a href={`/contacts/1`}>Your Name</a> */}
              {/* Los a refs hace un full reflesh y para prevenirlos utilizamos Link de rect */}
              <Link to={`contacts/1`} >Contactor 1</Link>
            </li>
            <li>
              {/* <a href={`/contacts/2`}>Your Friend</a> */}
              <Link to={`contacts/2`} >Contactor 2</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        {/* Para que los hijos de las rutas se rendericen aquí */}
        <Outlet/> 
      </div>
    </>
  )
}


