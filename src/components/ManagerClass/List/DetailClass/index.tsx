import React, { useEffect, useRef, useState } from 'react';
import { ControlBar, Player } from 'video-react';
import { Content, Obj } from 'global/interface';
import { formatNumber } from 'utils';
import LoadingAction from 'components/LoadingAction';
import ListStudent from './ListStudent';
import VideoClass from './Video';
import TabContent from 'elements/TabContent';
import videoIntro from 'assets/videos/video-intro.mp4';
import { ReactComponent as IconStar } from 'assets/svgs/icon-star.svg';
import './style.scss';


interface Props {
    idClass?: string;
    backList?: () => void;
}
const DetailClass = (props: Props) => {
    const videoRef = useRef(null);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        ((videoRef.current as unknown as Obj).video.video as HTMLVideoElement).onloadeddata = () => {
            setLoad(false);
        }
    }, [])
    const listContentRight: Content[] = [
        {
            key: 'LIST_STUDENT_ENROLL',
            isAuth: true,
            title: 'Học viên',
            component: <ListStudent />
        },
        {
            key: 'VIDEO_CLASS',
            isAuth: true,
            title: 'Video',
            component: <VideoClass />
        }
    ]
    return (
        <div className="container-detai-manager-class">
            <u onClick={() => { props.backList?.() }} className="back-list">Trở lại</u>
            <div className="content-main">
                <div className="left">
                    <h3>Khóa học: Sexy dance</h3>
                    <div className="video-thumbnail">
                        <Player src={videoIntro} ref={videoRef} autoPlay>
                            {load && <LoadingAction />}
                            <ControlBar autoHide={true} className="control-bar-video" />
                        </Player>
                    </div>
                    <div className="information-class">
                        <h1>Giáo viên: Nga Rubi</h1>
                        <p className="location">
                            Cơ sở: Cầu giấy
                        </p>
                        <p className="price"><span>Học phí: {formatNumber(12321321)}₫ </span><span>Chưa giảm giá</span></p>
                        <p className="vote">Đánh giá:&nbsp;3/5<IconStar /></p>
                    </div>
                </div>
                <div className="right">
                    <TabContent listContent={listContentRight} />
                </div>
            </div>
        </div>
    )
}

export default DetailClass