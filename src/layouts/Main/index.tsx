import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from '../../components/Home';
import { TabContent } from '../../elements/TabContent';
import { Content } from '../../global/interface';
import './style.scss';

export const LayoutMain = () => {
    const navigate = useNavigate();
    const listTab: Content[] = [
        {
            component: <Home />,
            title: 'Trang chủ',
            key: 'HOME',
        },
        {
            component: <></>,
            title: 'Đăng nhập',
            key: 'LOGIN',
            customClick() {
                navigate('/auth/login')
            },
        },
    ]
    return (
        <div className="container-main">
            <TabContent listContent={listTab} />
        </div>
    )
}
