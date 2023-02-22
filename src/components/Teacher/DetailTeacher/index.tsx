import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { scrollToTop } from 'utils';
import { handleJumpTab, handleSetViewDetailCourse } from 'global/global-action';
import ModalVideo from './ModalVideo';
import CellClassDance from 'elements/CellClassDance';
import ModalCustom from 'elements/Modal';
import teacher from 'assets/imgs/teacher.webp';
import './style.scss';

interface Props {
    children?: React.ReactElement;
    idTeacher: string;
    back: () => void;
}

const DetailTeacher = (props: Props) => {
    const [modalVideo, setModalVideo] = useState<boolean>(false);
    const dispatch = useDispatch();
    const handleDetailCourse = (id: string, clear?: boolean) => {
        dispatch(handleJumpTab({ idTab: 'COURSES' }));  
        dispatch(handleSetViewDetailCourse({
            id
        }, clear));
    }
    useEffect(() => {
        scrollToTop();
    }, [])
    return (
        <div className="container-detail-teacher">
            <u onClick={() => { props.back() }} className="cr-p">Trở lại</u>
            <div className="main-content">
                <div className="information-introduction">
                    <div className="item">
                        <img src={teacher} alt="" />
                    </div>
                    <div className="item">
                        <h1 className="name-teacher">Nga Rubi</h1>
                        <div className="major">
                            <h3>Giáo viên:</h3>
                            <p>- KPop</p>
                            <p>- Sexy dance</p>
                        </div>
                        <div className="experience">
                            <h3>Kinh nghiệm:</h3>
                            <p>- 6 năm vũ công, biên đạo, giảng dạy</p>
                            <p>- Thành viên nhóm Dance Cover Stay Crew</p>
                            <p>- Backup dance cho ca sĩ Đức Phúc, Erik, Đông Nhi,...</p>
                        </div>
                        <div className="video-dancing">
                            <p>Cùng xem Giáo viên Nga Rubi thể hiện tài năng <u className="cr-p" onClick={() => { setModalVideo(true) }}>tại đây</u> nhé!</p>
                        </div>
                    </div>
                </div>
                <div className="class-teaching">
                    <h3>Các lớp đang giảng dạy</h3>
                    <div className="class-major">
                        <CellClassDance handleClickCell={() => { handleDetailCourse('123') }} />
                        <CellClassDance handleClickCell={() => { handleDetailCourse('0812321') }} />
                    </div>
                </div>
            </div>
            {modalVideo &&
                <ModalCustom isOpen={modalVideo} title={'Video dance'} onCancel={() => { setModalVideo(false) }} onOk={() => { setModalVideo(false) }} >
                    <ModalVideo />
                </ModalCustom>}

        </div>
    )
}

export default DetailTeacher