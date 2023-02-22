import React, { useRef, useState, useEffect } from 'react';
import { ControlBar, Player } from 'video-react';
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Obj } from 'global/interface';
import LoadingAction from 'components/LoadingAction';
import ShowComment from 'components/Teacher/DetailTeacher/ModalVideo/ShowComment';
import DrawerCustom from 'elements/Drawer';
import shaneAvatar from 'assets/imgs/shane-avatar.jpeg';
import iconComment from 'assets/imgs/icon-comment.png';
import { ReactComponent as HeartSolid } from 'assets/svgs/heart-solid.svg';
import video from 'assets/videos/temp-video.mp4';
import './style.scss';


const Posts = () => {
    const videoRef = useRef(null);
    const [load, setLoad] = useState(true);
    const [showDrawer, setShowDrawer] = useState(false);
    useEffect(() => {
        ((videoRef.current as unknown as Obj).video.video as HTMLVideoElement).onloadeddata = () => {
            setLoad(false);
        }
    }, [])
    return (
        <div className="container-posts">
            <div className="round">
                <div className="post-item">
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
                <div className="post-item">
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
                </div>
                <div className="post-item">
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
                </div>
            </div>
        </div>
    )
}

export default Posts;