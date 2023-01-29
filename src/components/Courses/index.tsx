import React, { useState, useEffect } from 'react';
import { Checkbox, Radio, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Obj } from 'global/interface';
import { handleSetViewDetailCourse } from 'global/global-action';
import { DANCE_MAJOR, STATUS_COURSE } from 'global/enum';
import { State } from 'redux-saga/reducer';
import DetailCourse from './Detail';
import CellClassDance from 'elements/CellClassDance';
import { ReactComponent as ListSolid } from 'assets/svgs/list-solid.svg';
import './style.scss';

const listTeacher = [
    {
        id: 1,
        stageName: 'Shane'
    },
    {
        id: 2,
        stageName: 'Nga Rubi'
    },
    {
        id: 3,
        stageName: 'Lung Linh Hoa Vàng'
    },
]
const listMajorDance = [
    {
        nameMajor: 'Tất cả',
        id: DANCE_MAJOR.ALL
    },
    {
        nameMajor: 'Sexy dance',
        id: DANCE_MAJOR.SEXY_DANCE
    },
    {
        nameMajor: 'KPop dance',
        id: DANCE_MAJOR.KPOP_DANCE
    },
    {
        nameMajor: 'Shuffle dance',
        id: DANCE_MAJOR.SHUFFLE_DANCE
    },
    {
        nameMajor: 'Múa CT',
        id: DANCE_MAJOR.ANTIES_QUES_DANCE
    },
]
const listStatusCourse = [
    {
        value: STATUS_COURSE.ALL,
        label: 'Tất cả'
    },
    {
        value: STATUS_COURSE.COMMING_SOON,
        label: 'Sắp mở'
    },
    {
        value: STATUS_COURSE.RUNNING,
        label: 'Đang mở'
    },
    {
        value: STATUS_COURSE.END,
        label: 'Đã kết thúc'
    },
]
const Courses = () => {
    const [major, setMajor] = useState<DANCE_MAJOR>(DANCE_MAJOR.SEXY_DANCE);
    const dispatch = useDispatch();
    const crrViewDetailCourse = useSelector((state: State) => state.currentViewDetailCourse);
    const handleCategoryTeacher = (teacher: Obj) => {
        console.log(teacher);
    };
    const handleCategoryCourse = (course: Obj) => {
        setMajor(course.target.value as DANCE_MAJOR);
    }
    const handleDetailCourse = (id: string, clear?: boolean) => {
        dispatch(handleSetViewDetailCourse({
            id
        }, clear))
    }
    useEffect(() => {
        return () => {
            handleDetailCourse('', true);
        }
    }, [])

    return (
        <>
            {
                !crrViewDetailCourse ? <div className="container-coures">
                    <h1 className="title-page">Khóa học tại Phoenix</h1>
                    <div className="main-show-coures">
                        <div className="section-control">
                            <div className="cate-gory-teacher">
                                <div className="title">
                                    <ListSolid className="icon" /> <strong>Danh mục giáo viên</strong>
                                </div>
                                <div className="list-teacher">
                                    <Checkbox onChange={(e) => {
                                        handleCategoryTeacher({
                                            id: 0,
                                            teacher: 'Tất cả',
                                            checked: e.target.checked
                                        })
                                    }}><span className="stage-name">Tất cả</span></Checkbox>
                                    {listTeacher.map((item) => {
                                        return (
                                            <Checkbox key={item.id} onChange={(e) => {
                                                handleCategoryTeacher({
                                                    id: item.id,
                                                    teacher: item.stageName,
                                                    checked: e.target.checked
                                                })
                                            }}><span className="stage-name">{item.stageName}</span></Checkbox>
                                        )
                                    })}
                                </div>
                                <div className="list-coures-major">
                                    <div className="title">
                                        <ListSolid className="icon" /><strong>Bộ môn</strong>
                                    </div>
                                    <div className="list-major">
                                        <Radio.Group onChange={handleCategoryCourse} value={major} className="radio-major">
                                            {listMajorDance.map((item) => {
                                                return (
                                                    <Radio key={item.id} value={item.id}>{item.nameMajor}</Radio>
                                                )
                                            })}
                                        </Radio.Group>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-concept">
                            <div className="status-course">
                                <b>Trạng thái</b>
                                <Select
                                    defaultValue="ALL"
                                    style={{ width: 120 }}
                                    options={listStatusCourse}
                                />
                            </div>
                            <div className="show-courses">
                                <CellClassDance handleClickCell={() => { handleDetailCourse('62') }} />
                                <CellClassDance handleClickCell={() => { handleDetailCourse('00123') }} />
                                <CellClassDance handleClickCell={() => { handleDetailCourse('7899238921') }} />
                                <CellClassDance handleClickCell={() => { handleDetailCourse('009123231') }} />
                                <CellClassDance handleClickCell={() => { handleDetailCourse('1232321') }} />
                            </div>
                        </div>
                    </div>
                </div>
                    : <DetailCourse idCourse={crrViewDetailCourse.id as string} onBackPage={() => { handleDetailCourse('', true) }} />
            }
        </>
    )
}

export default Courses;