import React, { useState } from 'react';
import { Avatar, Badge, Space } from 'antd';
import { useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import { formatNumber } from 'utils';
import { useToast } from 'utils/hooks';
import { State } from 'redux-saga/reducer';
import { ButtonCustom } from 'elements/ButtonCustom';
import logo from 'assets/imgs/logo.png';
import shaneAvatar from 'assets/imgs/shane-avatar.jpeg';
import './style.scss';

interface Props {
    children?: React.ReactElement;
    idCourse: string;
    onBackPage?: () => void;
}
const DetailCourse = (props: Props) => {
    const crrUser = useSelector((state: State) => state.userLogin);
    const [loadingJoin, setLoadingJoin] = useState<boolean>(false);
    const toast = useToast();
    const handleMyCalendar = () => {
        if (!crrUser) {
            toast(true, 'Bạn chưa đăng nhập', 'top-end', false);
        }
    }
    const handleJoinClass = () => {
        setLoadingJoin(true);
        setTimeout(() => {
            setLoadingJoin(false);
        }, 2000)
    }
    return (
        <div className="container-detail-course">
            <u onClick={() => { props.onBackPage?.() }} className="cr-p">Danh sách khóa học</u>
            <div className="main-content-detail-course">
                <div className="img-thumbnail-course">
                    <img src={logo} alt="" />
                </div>
                <div className="class">
                    <div className="class-name">
                        <Badge.Ribbon text="Comming soon" className="status-class" color="green">
                            <h1>
                                Sexy dance SX31
                            </h1>
                        </Badge.Ribbon>
                        <div className="slot">
                            Số học viên: <strong className="green">1/5</strong>
                        </div>
                        <div className="my-calendar" onClick={() => { handleMyCalendar() }}>
                            <u>Lịch của tôi</u>
                        </div>
                    </div>
                    <div className="price">
                        <strong>{formatNumber(12321321)}₫</strong>
                    </div>
                    <div className="time">
                        <div className="begin-end">
                            <div className="row-time">
                                <span className="time">Khai giảng: <strong>04/02/2023</strong></span>
                                <span className="arrow">&rarr;</span>
                                <span className="time">Kết thúc: <strong>04/03/2023</strong></span>
                            </div>
                        </div>
                        <div className="time-learning">
                            <span>Thời gian học: <strong>12h30, Thứ 4 hàng tuần</strong></span>
                        </div>
                    </div>
                    <div className="address-position">
                        <p className='address'>Địa điểm: <strong>Cầu giấy, Hà Nội</strong></p>
                    </div>
                    <div className="teacher">
                        <span className="title">Giáo viên:</span>
                        <br />
                        <Space direction="vertical" size={16}>
                            <Space wrap size={16}>
                                <Avatar size="large" icon={<UserOutlined />} src={shaneAvatar} />
                            </Space>
                        </Space>
                        <h1 className="default-name">Shane (Đỗ Mạnh Trường)</h1>
                    </div>
                    <div className="join-class">
                        <ButtonCustom loading={loadingJoin} className="button-join" text="Đăng ký ngay" onClick={() => { handleJoinClass() }} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DetailCourse