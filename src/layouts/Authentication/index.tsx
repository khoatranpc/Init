import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.scss';
export const AuthenticationLayout = () => {
    return (
        <div className="authen-layout">
            <Outlet />
        </div>
    )
}
