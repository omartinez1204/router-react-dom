import { useRouteError } from "react-router-dom"


export const Error = () => {

    const error = useRouteError()

    return (
        <div id="error-page">
            <h1>A chissss, Achiisss, Que cosas NOoo???</h1>
            <p>
                A ocurrido un error, en tu app....
            </p>
            <p>
                <i>
                    {error.statusText || error.message}
                </i>
            </p>
        </div>
    )
}
