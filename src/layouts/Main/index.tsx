import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Content } from '../../global/interface';
import { useUserLogout } from 'utils/hooks';
import { State } from 'redux-saga/reducer';
import { AuthProtect } from 'components/AuthProtect';
import Courses from 'components/Courses';
import { LogOut } from 'elements/Logout';
import LazyImport from 'elements/LazyImport';
import logo from 'assets/imgs/logo.webp';
import './style.scss';

const TabContent = React.lazy(() => import('elements/TabContent'));
const Home = React.lazy(() => import('components/Home'));
const Footer = React.lazy(() => import('components/Footer'));
const Teacher = React.lazy(() => import('components/Teacher'));

const LayoutMain = () => {
    const navigate = useNavigate();
    const crrUser = useSelector((state: State) => state.userLogin);
    const logout = useUserLogout();
    const listTab: Content[] = [
        {
            component: <LazyImport><Home /></LazyImport>,
            title: <img src={logo} alt="phoenix" className="logo-phoenix" />,
            key: 'LOGO'
        },
        {
            component: <LazyImport><Home /></LazyImport>,
            title: 'Trang chủ',
            key: 'HOME',
        },
        {
            component: <LazyImport><Teacher /></LazyImport>,
            title: 'Giáo viên',
            key: 'TEACHER',
        },
        {
            component: <LazyImport><Courses /></LazyImport>,
            title: 'Khóa học',
            key: 'COURSES',
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
        <div className="container-main">
            <LazyImport><TabContent listContent={listTab} /></LazyImport>
            <LazyImport><Footer /></LazyImport>
        </div>
    )
}
export default LayoutMain;