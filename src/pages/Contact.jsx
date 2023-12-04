import { Form, useLoaderData } from 'react-router-dom'

export const Contact = () => {

    const { contact } = useLoaderData();
    
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
                            : (<i>Sin nombre</i>)
                    }
                    <Favorite contact={contact} />
                </h1>
                {
                    contact.twitter && (<a target='_blank' href={`https://twitter.com/${contact.twitter}`} />)
                }
                {
                    contact.notes && (<p> {contact.notes} </p>)
                }
                <div>
                    <Form action='edit'>
                        <button type='submit'>Editar</button>
                    </Form>
                    <Form
                        method='post'
                        action='destroy'
                        onSubmit={(event) => {
                            if (!confirm('Porfavor de confirmar esta acción')) {
                                event.preventDefault()
                            }
                        }}
                    >
                        <button type='submit'> Delete </button>
                    </Form>
                </div>
            </div>
        </div>
    )

}

function Favorite({ contact }) {
    let favorite = contact.favorite;
    return (
        <Form method="post">
            <button
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label=
                {
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

