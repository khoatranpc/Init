import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Error = () => {
    return (
        <div className="error-page">
            <div className="number">404</div>
            <div className="text">
                <span>Oops...</span>
                <br />
                Page not found
            </div>
            <Link to={'/'}>Back to home page here!</Link>
        </div>
    )
}
export default Error;