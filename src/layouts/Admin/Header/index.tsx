import React from 'react';
import { Avatar, Space, MenuProps, Dropdown } from 'antd';
import { useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import { Obj } from 'global/interface';
import { State } from 'redux-saga/reducer';
import { useUserLogout } from 'utils/hooks';
import shaneAvatar from 'assets/imgs/shane-avatar.jpeg';
import logo from 'assets/imgs/logo.png';
import './style.scss';


const HeaderAdmin = () => {
    const crrUser = useSelector((state: State) => state.userLogin);
    const logout = useUserLogout();
    const items: MenuProps['items'] = [
        {
            key: 'MY_PROFILE',
            label: <span style={{ color: '#ff5900' }}>Trang cá nhân</span>,
        },
        {
            key: 'SETTING',
            label: <span style={{ color: '#ff5900' }}>Cài đặt</span>,
        },
        {
            key: 'LOG_OUT',
            label: <span style={{ color: '#ff5900' }} onClick={() => { logout() }}>Đăng xuất</span>
        },
    ];
    return (
        <div className="header-admin-layout">
            <img src={logo} alt="" />
            <div className="end-row">
                <Dropdown menu={{ items }}>
                    <Space direction="vertical" size={16} className="user-circle">
                        <Space wrap size={16}>
                            <Avatar size="large" icon={<UserOutlined />} src={shaneAvatar} />
                            <div className="admin">
                                <span>{((crrUser as Obj)?.response.data as Obj)?.userInfor.username}</span>
                                <small>{((crrUser as Obj)?.response.data as Obj)?.userInfor.role}</small>
                            </div>
                        </Space>
                    </Space>
                </Dropdown>

            </div>
        </div>
    )
}

export default HeaderAdmin