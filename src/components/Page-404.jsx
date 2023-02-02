import React from 'react';
import './404.css';

const Page404 = () => {
    return (
        <div className="page-404">
            <h1 className="page-404__title">404</h1>
            <h2 className="page-404__subtitle">Page not found</h2>
            <p className="page-404__description">
                Sorry, the page you're looking for could not be found.
            </p>
        </div>
    );
}

export default Page404;
