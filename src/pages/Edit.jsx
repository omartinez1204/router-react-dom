
import { Form, useLoaderData } from 'react-router-dom'


export const Edit = () => {

    const {contact} = useLoaderData();

    return (
        <Form method='post' id='contact-form'>
            <p>
                <span>Nombre</span>
                <input
                    type="text"
                    placeholder='Nombre'
                    aria-label='First name'
                    defaultValue={contact.first}
                    name='first'
                />
                <input
                    type="text"
                    name='last'
                    placeholder='Apellidos'
                    aria-label='Last name'
                    defaultValue={contact.last}
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text"
                    name='twitter'
                    placeholder='@omartinez'
                    defaultValue={contact.twitter}
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    placeholder='https://example.com/avatar.jpg'
                    type="text"
                    aria-label='Avatar URL'
                    name='avatar'
                    defaultValue={contact.avatar}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    name='notes'
                    defaultValue={contact.notes}
                    rows={6}
                />
            </label>
            <p>
                <button type='submit'>Guardar</button>
                <button type='button'>Cancelar</button>
            </p>
        </Form>
    )
}
