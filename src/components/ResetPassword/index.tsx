import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'redux-saga/reducer';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import * as Yup from 'yup';
import { Query } from 'global/interface';
import { Toaster } from 'elements/Toaster';
import { ButtonCustom } from 'elements/ButtonCustom';
import Error from 'components/Error';
import { queryLoginUser } from './action';
import './style.scss';

const validationSchema = Yup.object({
    password: Yup.string()
        .required('Bạn chưa nhập mật khẩu!')
})
export const ResetPassowrd = () => {
    const dispatch = useDispatch();
    const { email, verifyCode } = useParams();

    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const userResetPassword = useSelector((state: State) => state.userResetPassword);
    const { handleSubmit, values, handleBlur, handleChange, errors, touched, isValid } = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema,
        onSubmit(values) {
            const payload: Query = {
                body: values,
                params: [email as string, verifyCode as string]
            }
            setLoading(true);
            dispatch(queryLoginUser(payload));
        }
    });
    useEffect(() => {
        if (userResetPassword) {
            setLoading(false);
            setShowToast(true);
        }
    }, [userResetPassword])
    if (!email || !verifyCode) {
        return <Error />
    }
    return (
        <div className="reset-password-page">
            <h3><span>Thay đổi mật khẩu</span></h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Mật khẩu mới <span className="error-text">*</span></Form.Label>
                    <Input.Password
                        type="password" name="password" onBlur={handleBlur} onChange={handleChange} placeholder="Password" value={values.password}
                        status={`${!isValid && errors.password ? 'error' : ''}`}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    {errors.password && touched.password && <p className="error-text">{errors.password}</p>}
                </Form.Group>
                <div className="btn-fnc">
                    <ButtonCustom type="submit" className="btn-login" text='Thay đổi' loading={loading} />
                    <p style={{ textAlign: 'right', margin: 0 }}><Link to="/auth/login">Đăng nhập</Link></p>
                </div>
            </Form>

            <Toaster
                show={showToast}
                onClose={() => {
                    setShowToast(false);
                }}
                type={userResetPassword?.success as boolean}
                position='top-center'
                message={userResetPassword?.response?.message as string} />
        </div>
    )
}
