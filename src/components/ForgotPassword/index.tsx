import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import { Obj, Query } from 'global/interface';
import { State } from 'redux-saga/reducer';
import { USER_FORGOT_PASSWORD_CLEAR } from '../../redux-saga/reducers/user';
import { Toaster } from 'elements/Toaster';
import { ButtonCustom } from 'elements/ButtonCustom';
import { queryForgotUser } from './action';
import './style.scss';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Bạn cần nhập đúng định dạng email!')
        .required('Bạn chưa nhập email!'),
})
export const ForgotPassword = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const requestForgotPassword = useSelector((state: State) => state.userForgotPassword);
    const { handleSubmit, values, handleBlur, handleChange, errors, touched, isValid } = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema,
        onSubmit(values) {
            const payload: Query = {
                query: values
            }
            setLoading(true);
            dispatch(queryForgotUser(payload));
        }
    });
    useEffect(() => {
        if (requestForgotPassword) {
            setLoading(false);
            setShowToast(true);
        }
        return () => {
            dispatch({ type: USER_FORGOT_PASSWORD_CLEAR })
        }
    }, [requestForgotPassword])
    return (
        <div className="forgot-password-page">
            <h3><span>Lấy lại mật khẩu</span></h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email <span className="error-text">*</span></Form.Label>
                    <Form.Control isInvalid={!isValid && errors.email ? true : false} type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Nhập email của bạn tại đây" />
                    {errors.email && touched.email && <p className="error-text">{errors.email}</p>}
                </Form.Group>
                <div className="btn-fnc">
                    <ButtonCustom type="submit" className="btn-login" text='Kiểm tra' loading={loading} />
                </div>
            </Form>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p><Link to='/auth/login' replace>Đã có tài khoản?</Link></p>
                <p><Link to='/auth/register' replace>Chưa có tài khoản?</Link></p>
            </div>
            <Toaster
                show={showToast}
                onClose={() => {
                    setShowToast(false);
                }}
                type={requestForgotPassword?.success as boolean}
                position='top-center'
                message={requestForgotPassword?.response?.message as string} />
        </div>
    )
}
