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
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(true);
    const crrUser = useSelector((state: State) => state.userLogin);
    const isQuery = useRef(true);
    useEffect(() => {
        if (!crrUser && isQuery.current) {
            dispatch(queryGetInformationUser({}));
            isQuery.current = false;
        }
        if (crrUser) {
            if (!crrUser.success) {
                dispatch(clearDataUser());
                localStorage.removeItem('access_token');
            } else {
                localStorage.setItem('access_token', 'Bearer ' + (crrUser?.response as Obj)?.data.token);
            }
            setLoading(false);
        }
    }, [crrUser, dispatch, loading])
    return (
        <>
            {loading ? <div className="auth-protect"><LoadingAction className='auth-protect-loading' /></div> : props.children}
        </>
    )

}
