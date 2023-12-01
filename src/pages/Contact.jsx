import {} from 'react-router-dom'
export const Contact = () => {

    const contact = {
        first: 'Omar',
        last:'Martínez',
        avatar: 'https://placekitten.com/g/200/200',
        twitter: 'No tengo',
        notes: 'Algunas notas, personales',
        favorite: true
    }

  return (
    <div id="contact">
      <div>
        <img src={contact.avatar} alt={contact.avatar || null} />
      </div>
      <div>
        <h1>
            {
                contact.first || contact.last 
                ? (<> {contact.first} {contact.last}</>) 
                : ( <i>Sin nombre</i>  ) 
            }      
            <Favorite contact={contact} />  
        </h1>
        {
            contact.twitter && ( <a target='_blank' href={`https://twitter.com/${contact.twitter}`} /> )
        }
        {  
            contact.notes && ( <p> {contact.notes} </p> )
        }
        <div>
            //Todo: hasta aqui voy...
        </div>
      </div>
    </div>
  )

}

function Favorite({ contact }) {
    // yes, this is a `let` for later
    let favorite = contact.favorite;
    return (
      <Form method="post">
        <button
          name="favorite"
          value={favorite ? "false" : "true"}
          aria-label={
            favorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {favorite ? "★" : "☆"}
        </button>
      </Form>
    );
  }

