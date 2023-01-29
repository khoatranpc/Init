import React from 'react';
import { useRedirectRoute } from 'utils/hooks';
import { AuthProtect } from 'components/AuthProtect';
import './style.scss';

const Error = () => {
    const redirect = useRedirectRoute();
    return (
        <AuthProtect>
            <div className="error-page">
                <div className="number">404</div>
                <div className="text">
                    <span>Oops...</span>
                    <br />
                    Page not found
                </div>
                <u style={{ cursor: 'pointer', color: 'var(--blue-base)' }} onClick={() => {
                    redirect()
                }}>Back to home page here!</u>
            </div>
        </AuthProtect>
    )
}
export default Error;