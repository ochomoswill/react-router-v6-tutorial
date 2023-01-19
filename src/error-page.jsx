import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" style={{background: 'hsl(0deg 42% 95%)'}}>
            <h1 style={{color: 'red'}}>Oops!</h1>
            <p style={{color: 'red'}}>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
