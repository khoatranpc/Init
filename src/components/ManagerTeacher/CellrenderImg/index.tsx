import React from 'react';
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import shaneAvatar from 'assets/imgs/shane-avatar.jpeg';
import './style.scss';

export const CellrenderImg = () => {
    return (
        <div className="render-img">
            <Space direction="vertical" size={10} className="user-circle">
                <Space wrap size={10}>
                    <Avatar size="small" icon={<UserOutlined />} src={shaneAvatar} />
                </Space>
            </Space>
        </div>
    )
}
