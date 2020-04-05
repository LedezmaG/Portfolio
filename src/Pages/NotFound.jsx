import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return(
        <>
            <div className="NotFound__Content">
                <span className="NotFound__Number">404</span> 
                <p className="NotFound__Messaje">Page Not Found</p>
                <Link to="/" className="btn btn__xl">Go Back</Link>
            </div>
        </>
    )
}

export default NotFound