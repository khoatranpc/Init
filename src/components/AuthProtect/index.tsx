import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'redux-saga/reducer';
import { Obj } from 'global/interface';
import LoadingAction from 'components/LoadingAction';
import { clearDataUser, queryGetInformationUser } from './action';
import './style.scss';

interface Props {
    children?: React.ReactElement;
}

export const AuthProtect = (props: Props) => {
    const token = localStorage.getItem('access_token') as string;
    const dispatch = useDispatch();
    const statusLogout = localStorage.getItem('logout') as string;
    const [loading, setLoading] = useState<boolean>(true);
    const crrUser = useSelector((state: State) => state.userLogin);
    const isQuery = useRef(true);
    useEffect(() => {
        if (statusLogout) {
            dispatch(clearDataUser());
            localStorage.removeItem('access_token');
            localStorage.removeItem('logout');
            isQuery.current = false;
        } else {
            if (token && !crrUser && isQuery.current) {
                dispatch(queryGetInformationUser({}));
                isQuery.current = false;
            }
        }
        if (crrUser) {
            setLoading(false);
            if (!crrUser.success) {
                dispatch(clearDataUser());
                localStorage.removeItem('access_token');
            } else {
                localStorage.setItem('access_token', 'Bearer ' + (crrUser?.response as Obj)?.data.token);
            }
        } else {
            localStorage.removeItem('access_token');
            setLoading(false);
        }
    }, [crrUser])
    if (loading) {
        return <div className="auth-protect"><LoadingAction className='auth-protect-loading' /></div>
    }
    return (
        <>
            {props.children}
        </>
    )

}
