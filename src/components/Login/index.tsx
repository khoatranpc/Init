import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as Yup from 'yup';
import { Toaster } from '../../elements/Toaster';
import './style.scss';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Bạn cần nhập đúng định dạng email!')
        .required('Bạn chưa nhập email!'),
    password: Yup.string()
        .required('Bạn chưa nhập mật khẩu!')
})
export const Login = () => {
    const { handleSubmit, values, handleBlur, handleChange, errors, touched, isValid } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit(values) {
            console.log(values)
        }
    });
    const navigate = useNavigate();
    return (
        <div className="login-page">
            <h3><span>Đăng nhập</span></h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email <span className="error-text">*</span></Form.Label>
                    <Form.Control isInvalid={!isValid && errors.email ? true : false} type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Nhập email của bạn tại đây" />
                    {errors.email && touched.email && <p className="error-text">{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Mật khẩu <span className="error-text">*</span></Form.Label>
                    <Form.Control isInvalid={!isValid && errors.password ? true : false} type="password" name="password" onBlur={handleBlur} onChange={handleChange} placeholder="Password" value={values.password} />
                    {errors.password && touched.password && <p className="error-text">{errors.password}</p>}
                </Form.Group>
                <div className="btn-fnc">
                    <Button type="submit" className="btn-login">
                        Đăng nhập
                    </Button>
                    <Button className="btn-switch-register" onClick={() => {
                        navigate('/auth/register', { replace: true })
                    }}>
                        Đăng ký
                    </Button>
                </div>
            </Form>
            {/* <Toaster position='top-center' message='Đăng nhập thành công' /> */}
        </div>
    )
}
