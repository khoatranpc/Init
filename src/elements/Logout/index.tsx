import React from 'react';
import LoadingAction from 'components/LoadingAction';
import './style.scss';

export const LogOut = () => {
    return (
        <div className="logout">
            <LoadingAction className='auth-protect-loading' />
        </div>
    )
}
