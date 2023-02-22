import React, { lazy, useState } from 'react';
import { Space, Avatar, RadioChangeEvent, Radio, Button, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Content } from 'global/interface';
import { ROLE, STATUS_USER } from 'global/enum';
import LazyImport from 'elements/LazyImport';
import TabContent from 'elements/TabContent';
import shaneAvatar from 'assets/imgs/shane-avatar.jpeg';
import './style.scss';

interface Props {

}
const Posts = lazy(() => import('./Posts'));
const DetailTeacher = (props: Props) => {
    const [status, setStatus] = useState<STATUS_USER>();
    const [role, setRole] = useState<ROLE>();
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (fieldChange: string, value: STATUS_USER | ROLE) => {
        const key = `open${Date.now()}`;
        const btn = (
            <Space>
                <Button type="link" size="small" onClick={() => api.destroy()}>
                    Hủy
                </Button>
                <Button type="primary" size="small" onClick={() => {
                    if (fieldChange === 'STATUS') {
                        setStatus(value as STATUS_USER);
                    } else {
                        setRole(value as ROLE)
                    }
                    return api.destroy(key);
                }}>
                    Xác nhận
                </Button>
            </Space>
        );
        api.open({
            message: `Thay đổi ${fieldChange === 'STATUS' ? 'trạng thái' : 'quyền'} tài khoản`,
            description:
                `Bạn có chắc chắn muốn thay đổi?`,
            btn,
            key,
        });
    };

    const onChangeStatus = (e: RadioChangeEvent) => {
        openNotification('STATUS', e.target.value);
    };
    const onChangeRole = (e: RadioChangeEvent) => {
        openNotification('Role', e.target.value);
    };

    const listTab: Content[] = [
        {
            title: <p className="title-tab">Bài viết</p>,
            key: 'POSTS',
            component: <LazyImport><Posts /></LazyImport>,
            isAuth: true,
        },
        {
            title: <p className="title-tab">Lớp học</p>,
            key: 'CLASSES',
            component: <>Lớp học</>,
            isAuth: true,
        },
        {
            title: <p className="title-tab">Lịch</p>,
            key: 'SCHEDULE',
            component: <>Lịch</>,
            isAuth: true,
        },
    ]

    return (
        <div className="container-detail-teacher">
            <div className="top-detail-information">
                <div className="left-information">
                    <div className="img">
                        <Space wrap size={50}>
                            <Avatar size={100} icon={<UserOutlined />} src={shaneAvatar} />
                        </Space>
                    </div>
                    <div className="username">
                        <h1>Đỗ Mạnh Trường <span>(Shane lão sư)</span></h1>
                    </div>
                </div>
                <div className="right-information">
                    <div className="col">
                        {contextHolder}
                        <span className="title">Trạng thái tài khoản</span>
                        <Radio.Group onChange={onChangeStatus} value={status}>
                            <Radio value={STATUS_USER.ACTIVATE}>Activate</Radio>
                            <Radio value={STATUS_USER.DEACTIVATE}>DeActivate</Radio>
                        </Radio.Group>
                    </div>
                    <div className="col">
                        {contextHolder}
                        <span className="title">Phân quyền tài khoản</span>
                        <Radio.Group onChange={onChangeRole} value={role}>
                            <Radio value={ROLE.ADMIN}>Admin</Radio>
                            <Radio value={ROLE.TEACHER}>Giáo viên</Radio>
                            <Radio value={ROLE.STUDENT}>Học viên</Radio>
                        </Radio.Group>
                    </div>
                </div>
            </div>
            <div className="tab-content">
                <TabContent listContent={listTab} className="layout-tab-teacher-detail" />
            </div>
        </div>
    )
}

export default DetailTeacher