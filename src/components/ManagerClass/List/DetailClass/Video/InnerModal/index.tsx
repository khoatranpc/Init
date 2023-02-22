import React, { useRef, useState, useEffect } from 'react';
import { ControlBar, Player } from 'video-react';
import { Input } from 'antd';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Obj } from 'global/interface';
import LoadingAction from 'components/LoadingAction';
import { ButtonCustom } from 'elements/ButtonCustom';
import videoIntro from 'assets/videos/video-intro.mp4';
import './style.scss';

interface Props {
    modal: 'VIDEO' | 'EDIT';
    crrIdVideo: string;
}
const validationSchema = Yup.object({
    lesson: Yup.string()
        .required('Bạn chưa nhập buổi học phần!'),
    title: Yup.string().required('Nội dung buổi học cần được cung cấp!'),
    video: Yup.string().required('Bạn cần tải lên video buổi học!'),
})
const InnerModal = (props: Props) => {
    const videoRef = useRef(null);
    const [load, setLoad] = useState(true);
    const { handleSubmit, values, handleBlur, handleChange, errors, touched, isValid } = useFormik({
        initialValues: {
            lesson: '',
            title: '',
            video: ''
        },
        validationSchema,
        onSubmit(values) {
        }
    });

    useEffect(() => {
        if (videoRef.current) {
            ((videoRef.current as unknown as Obj).video.video as HTMLVideoElement).onloadeddata = () => {
                setLoad(false);
            }
        }
    }, [])
    return (
        <div className="container-modal-view">
            {props.modal === 'VIDEO' ?
                <div>
                    <Player src={videoIntro} ref={videoRef} autoPlay>
                        {load && <LoadingAction />}
                        <ControlBar autoHide={true} className="control-bar-video" />
                    </Player>
                </div>
                :
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><strong>Buổi học</strong> <span className="error-text">*</span></Form.Label>
                            <Input
                                type="text" name="lesson" onChange={handleChange} onBlur={handleBlur} value={values.lesson} placeholder="VD: Buổi 1"
                                status={`${!isValid && errors.lesson && touched.lesson ? 'error' : ''}`}
                            />
                            {errors.lesson && touched.lesson && <p className="error-text">{errors.lesson}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><strong>Nội dung</strong> <span className="error-text">*</span></Form.Label>
                            <Input
                                type="text" name="title" onChange={handleChange} onBlur={handleBlur} value={values.title} placeholder="VD: Học động tác"
                                status={`${!isValid && errors.title && touched.title ? 'error' : ''}`}
                            />
                            {errors.title && touched.title && <p className="error-text">{errors.title}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><strong>Video buổi học</strong> <span className="error-text">*</span></Form.Label>
                            <Input
                                type="file" name="video" onChange={handleChange} onBlur={handleBlur}
                                status={`${!isValid && errors.video && touched.video ? 'error' : ''}`}
                            />
                            {errors.video && touched.video && <p className="error-text">{errors.video}</p>}
                        </Form.Group>
                        <div className="btn-fnc">
                            <ButtonCustom type="submit" className="btn-login" text='Cập nhật' />
                        </div>
                    </Form>
                </div>
            }
        </div>
    )
}

export default InnerModal;