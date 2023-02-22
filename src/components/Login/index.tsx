import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import { Obj, Query } from 'global/interface';
import { State } from 'redux-saga/reducer';
import { queryLoginUser } from './action';
import { Toaster } from 'elements/Toaster';
import { ButtonCustom } from 'elements/ButtonCustom';
import './style.scss';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Bạn cần nhập đúng định dạng email!')
        .required('Bạn chưa nhập email!'),
    password: Yup.string()
        .required('Bạn chưa nhập mật khẩu!')
})
export const Login = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const userLogin = useSelector((state: State) => state.userLogin);
    const { handleSubmit, values, handleBlur, handleChange, errors, touched, isValid } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit(values) {
            const payload: Query = {
                body: values
            }
            dispatch(queryLoginUser(payload));
            setLoading(true);
        }
    });
    const navigate = useNavigate();
    useEffect(() => {
        if (userLogin) {
            setLoading(false);
            setShowToast(true);
            if (userLogin.success) {
                if ((userLogin?.response as Obj)?.data.token) {
                    localStorage.setItem('access_token', 'Bearer ' + (userLogin?.response as Obj)?.data.token as string);
                }
            }
        }
    }, [userLogin])
    return (
        <div className="login-page">
            <h3><span>Đăng nhập</span></h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email <span className="error-text">*</span></Form.Label>
                    <Input
                        type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Nhập email của bạn tại đây"
                        status={`${!isValid && errors.email ? 'error' : ''}`}
                    />
                    {errors.email && touched.email && <p className="error-text">{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Mật khẩu <span className="error-text">*</span></Form.Label>
                    <Input.Password
                        type="password" name="password" onBlur={handleBlur} onChange={handleChange} placeholder="Password" value={values.password}
                        status={`${!isValid && errors.password ? 'error' : ''}`}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    {errors.password && touched.password && <p className="error-text">{errors.password}</p>}
                </Form.Group>
                <div className="btn-fnc">
                    <ButtonCustom type="submit" className="btn-login" text='Đăng nhập' loading={loading} />
                    <Button className="btn-switch-register" onClick={() => {
                        navigate('/auth/register', { replace: true })
                    }}>
                        Đăng ký
                    </Button>
                </div>
            </Form>
            <p style={{ textAlign: 'right' }}><Link to="/auth/forgot-password">Quên mật khẩu?</Link></p>
            <Toaster
                show={showToast}
                onClose={() => {
                    setShowToast(false);
                }}
                type={userLogin?.success as boolean}
                position='top-center'
                message={(userLogin?.response as Obj)?.message as string} />
        </div>
    )
}
