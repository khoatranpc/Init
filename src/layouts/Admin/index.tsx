import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Content } from 'global/interface';
import { useUserLogout } from 'utils/hooks';
import { State } from 'redux-saga/reducer';
import ManagerTeacher from 'components/ManagerTeacher';
import ManagerClass from 'components/ManagerClass';
import HeaderAdmin from './Header';
import LazyImport from 'elements/LazyImport';
import { LogOut } from 'elements/Logout';
import { ReactComponent as DashboardIcon } from 'assets/svgs/icon-dash-board.svg';
import { ReactComponent as TeacherIcon } from 'assets/svgs/icon-teacher.svg';
import { ReactComponent as IconCourse } from 'assets/svgs/icon-course.svg';
import { ReactComponent as IconStatistical } from 'assets/svgs/icon-statistical.svg';
import { ReactComponent as IconLogout } from 'assets/svgs/icon-logout.svg';
import { ReactComponent as IconChat } from 'assets/svgs/icon-chat.svg';
import { ReactComponent as IconStudent } from 'assets/svgs/icon-student.svg';
import './style.scss';


const TabContent = React.lazy(() => import('elements/TabContent'));

const AdminLayout = () => {
    const crrUser = useSelector((state: State) => state.userLogin);
    const navigate = useNavigate();
    const logout = useUserLogout();
    const listTab: Content[] = [
        {
            title: <p className="title-tab"><DashboardIcon />Dash board</p>,
            key: 'DASH_BOARD',
            component: <>Dash board</>,
            isAuth: true,
        },
        {
            title: <p className="title-tab"><TeacherIcon className="icon-teacher" />Giáo viên</p>,
            key: 'MANAGER_TEACHER',
            component: <ManagerTeacher />,
            isAuth: true,
        },
        {
            title: <p className="title-tab"><IconStudent className="icon-student" />Học viên</p>,
            key: 'MANAGER_STUDENT',
            component: <>Quản lý học viên</>,
            isAuth: true,
        },
        {
            title: <p className="title-tab"><IconCourse className="icon-course" />Lớp học</p>,
            key: 'MANAGER_CLASS',
            component: <ManagerClass />,
            isAuth: true,
        },
        {
            title: <p className="title-tab"><IconStatistical className="icon-statistical" />Thống kê</p>,
            key: 'STATISTICAL',
            component: <>Thống kê</>,
            isAuth: true,
        },
        {
            title: <p className="title-tab"><IconChat className="icon-mess" />Tin nhắn</p>,
            key: 'MESSENGER',
            component: <>Tin nhắn</>,
            isAuth: true,
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
                component: <LogOut />,
                title: <p className="title-tab"><IconLogout />Đăng xuất</p>,
                key: 'LOG_OUT',
                customClick() {
                    logout();
                }
            },
        ]
    ]
    return (
        <div className="container-admin-layout">
            <HeaderAdmin />
            <LazyImport><TabContent listContent={listTab} className="layout-tab-in-admin" /></LazyImport>
        </div>
    )
}

export default AdminLayout;