import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Content } from '../../global/interface';
import { useUserLogout } from 'utils/hooks';
import { State } from 'redux-saga/reducer';
import { Home } from '../../components/Home';
import { AuthProtect } from 'components/AuthProtect';
import { TabContent } from '../../elements/TabContent';
import { LogOut } from 'elements/Logout';
import logo from 'assets/imgs/logo.webp';
import './style.scss';

export const LayoutMain = () => {
    const navigate = useNavigate();
    const crrUser = useSelector((state: State) => state.userLogin);
    const logout = useUserLogout();
    const listTab: Content[] = [
        {
            component: <Home />,
            title: <img src={logo} alt="phoenix" className="logo-phoenix"/>,
            key: 'LOGO'
        },
        {
            component: <Home />,
            title: 'Trang chủ',
            key: 'HOME',
        },
        {
            component: <>Teacher</>,
            title: 'Giáo viên',
            key: 'TEACHER',
        },
        {
            component: <>Lớp học</>,
            title: 'Lớp học',
            key: 'CLASSESS',
        },
        {
            component: <>Lớp học của tôi</>,
            title: 'Lớp của tôi',
            key: 'MY_CLASS',
            isAuth: true
        },
        ...!crrUser ? [
            {
                component: <></>,
                title: 'Đăng nhập',
                key: 'LOGIN',
                customClick() {
                    navigate('/auth/login')
                },
            },
        ] : [
            {
                component: <>Tài khoản</>,
                title: 'Tài khoản',
                key: 'MY_ACCOUNT',
            },
            {
                component: <LogOut />,
                title: 'Đăng xuất',
                key: 'LOG_OUT',
                customClick() {
                    logout();
                }
            },
        ],

    ]


    return (
        <AuthProtect>
            <div className="container-main">
                <TabContent listContent={listTab} />
            </div>
        </AuthProtect>
    )
}
