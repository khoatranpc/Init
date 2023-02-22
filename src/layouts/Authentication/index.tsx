import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { ROLE } from 'global/enum';
import { Obj } from 'global/interface';
import { PATH } from 'global/path';
import { State } from 'redux-saga/reducer';
import './style.scss';

export const AuthenticationLayout = () => {
    const currentUser = useSelector((state: State) => state.userLogin);
    const token = localStorage.getItem('access_token') as string;
    if (currentUser) {
        if (currentUser.success) {
            switch (((currentUser.response as Obj)?.data as Obj)?.userInfor.role as ROLE) {
                case ROLE.STUDENT:
                    return <Navigate to={PATH.STUDENT_NO_ROLE.HOME.route} replace />
                case ROLE.TEACHER:
                    return <Navigate to={PATH.TEACHER.HOME.route} replace />
                case ROLE.ADMIN:
                    return <Navigate to={PATH.ADMIN.HOME.route} replace />
                default:
                    return <Navigate to={'/'} replace />
            }
        }
    }
    if (token) {
        return <Navigate to={'/'} replace />
    }
    return (
        <div className="authen-layout">
            <Outlet />
        </div>
    )
}
