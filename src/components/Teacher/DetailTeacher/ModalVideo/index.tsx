import React, { useEffect, useRef, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { Player, ControlBar } from 'video-react';
import { Obj } from 'global/interface';
import LoadingAction from 'components/LoadingAction';
import DrawerCustom from 'elements/Drawer';
import ShowComment from './ShowComment';
import video from 'assets/videos/temp-video.mp4';
import shaneAvatar from 'assets/imgs/shane-avatar.jpeg';
import iconComment from 'assets/imgs/icon-comment.png';
import { ReactComponent as HeartSolid } from 'assets/svgs/heart-solid.svg';
import './style.scss';

const ModalVideo = () => {
    const videoRef = useRef(null);
    const [load, setLoad] = useState(true);
    const [showDrawer, setShowDrawer] = useState(false);
    useEffect(() => {
        ((videoRef.current as unknown as Obj).video.video as HTMLVideoElement).onloadeddata = () => {
            setLoad(false);
        }
    }, [])
    return (
        <div className="modal-video-short">
            <div className="video-status">
                <div className="author-status">
                    <div className="author-video">
                        <Space direction="vertical" size={16}>
                            <Space wrap size={16}>
                                <Avatar size="large" icon={<UserOutlined />} src={shaneAvatar} />
                            </Space>
                        </Space>
                        <div className="infor">
                            <span className="bold">Đỗ Mạnh Trường(Shane)</span>
                            <small className="time">
                                02 tháng 02, 2022
                            </small>
                        </div>
                    </div>
                    <div className="status">
                        Đây là dòng trạng thái,Đây là dòng trạng thái,Đây là dòng trạng thái,Đây là dòng trạng thái,Đây là dòng trạng thái
                    </div>
                </div>
                <Player src={video} ref={videoRef}>
                    {load && <LoadingAction />}
                    <ControlBar autoHide={true} className="control-bar-video" />
                </Player>
                <div className="fnc-footer">
                    <div className="like-status"><HeartSolid className="heart heart-liked" /></div>
                    <div className="comment-icon" onClick={() => { setShowDrawer(!showDrawer) }}><img src={iconComment} alt="" className="icon-comment" /></div>
                </div>
                <DrawerCustom isOpen={showDrawer} onClose={() => { setShowDrawer(false) }} placement='bottom' title='Bình luận' >
                    <ShowComment />
                </DrawerCustom>
            </div>
            <div className="video-status">
                <div className="author-status">
                    <div className="author-video">
                        <Space direction="vertical" size={16}>
                            <Space wrap size={16}>
                                <Avatar size="large" icon={<UserOutlined />} src={shaneAvatar} />
                            </Space>
                        </Space>
                        <div className="infor">
                            <span className="bold">Đỗ Mạnh Trường(Shane)</span>
                            <small className="time">
                                02 tháng 02, 2022
                            </small>
                        </div>
                    </div>
                    <div className="status">
                        Đây là dòng trạng thái,Đây là dòng trạng thái,Đây là dòng trạng thái,Đây là dòng trạng thái,Đây là dòng trạng thái
                    </div>
                </div>
                <Player src={video} ref={videoRef}>
                    {load && <LoadingAction />}
                    <ControlBar autoHide={true} className="control-bar-video" />
                </Player>
                <div className="fnc-footer">
                    <div className="like-status"><HeartSolid className="heart heart-liked" /></div>
                    <div className="comment-icon" onClick={() => { setShowDrawer(!showDrawer) }}><img src={iconComment} alt="" className="icon-comment" /></div>
                </div>
                <DrawerCustom isOpen={showDrawer} onClose={() => { setShowDrawer(false) }} placement='bottom' title='Bình luận' >
                    <ShowComment />
                </DrawerCustom>
            </div>
            <div className="video-status">
                <div className="author-status">
                    <div className="author-video">
                        <Space direction="vertical" size={16}>
                            <Space wrap size={16}>
                                <Avatar size="large" icon={<UserOutlined />} src={shaneAvatar} />
                            </Space>
                        </Space>
                        <div className="infor">
                            <span className="bold">Đỗ Mạnh Trường(Shane)</span>
                            <small className="time">
                                02 tháng 02, 2022
                            </small>
                        </div>
                    </div>
                    <div className="status">
                        Đây là dòng trạng thái,Đây là dòng trạng thái,Đây là dòng trạng thái,Đây là dòng trạng thái,Đây là dòng trạng thái
                    </div>
                </div>
                <Player src={video} ref={videoRef}>
                    {load && <LoadingAction />}
                    <ControlBar autoHide={true} className="control-bar-video" />
                </Player>
                <div className="fnc-footer">
                    <div className="like-status"><HeartSolid className="heart heart-liked" /></div>
                    <div className="comment-icon" onClick={() => { setShowDrawer(!showDrawer) }}><img src={iconComment} alt="" className="icon-comment" /></div>
                </div>
                <DrawerCustom isOpen={showDrawer} onClose={() => { setShowDrawer(false) }} placement='bottom' title='Bình luận' >
                    <ShowComment />
                </DrawerCustom>
            </div>
        </div>
    )
}

export default ModalVideo;