import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Oops!</h1>
            <p>
                <i>{error.data || error.message}</i>
            </p>
            <NavLink to="/">
                <button>Go to Home Page </button>
            </NavLink>
        </div>
    )
}

export default ErrorPage