import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GENDER } from 'global/enum';
import { State } from 'redux-saga/reducer';
import { USER_CREATE_CLEAR } from '../../redux-saga/reducers/user';
import { queryCreateUser } from './action';
import { Toaster } from 'elements/Toaster';
import LoadingAction from 'components/LoadingAction';
import './style.scss';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Bạn cần nhập đúng định dạng email!')
        .required('Bạn chưa nhập email!'),
    password: Yup.string()
        .required('Bạn chưa nhập mật khẩu!')
        .min(8, 'Mật khẩu ít nhất 8 ký tự!'),
    confirmPassword: Yup.string()
        .required('Bạn cần xác nhận mật khẩu!')
        .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa khớp'),
    username: Yup.string()
        .required('Bạn cần nhập họ tên!'),
})
export const Register = () => {
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { handleSubmit, values, handleBlur, handleChange, errors, touched, isValid } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            username: '',
            gender: GENDER.M
        },
        validationSchema,
        onSubmit(values) {
            values.gender = genderRef;
            const payload = {
                body: values
            }
            dispatch(queryCreateUser(payload));
            setLoading(true);
        },
    });
    const [genderRef, setRenderRef] = useState<GENDER>(GENDER.M);
    const changeGenderRef = (gender: GENDER) => {
        setRenderRef(gender);
    }
    const createUser = useSelector((state: State) => state.userCreate);
    useEffect(() => {
        if (createUser) {
            setLoading(false);
            setShowToast(true);
        }
    }, [createUser])
    const navigate = useNavigate();
    return (
        <div className="register-page">
            <h3><span>Đăng ký</span></h3>
            <p className="text-center">Chào mừng đến với Phoenix Dance Studio</p>
            <Form onSubmit={handleSubmit}>
                <div className="parent">
                    <div className="div1">
                        <Form.Group className="mb-3">
                            <Form.Label>Họ và tên <span className="error-text">*</span></Form.Label>
                            <Form.Control size='sm' isInvalid={!isValid && errors.username ? true : false} type="text" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username} placeholder="Vd: Đỗ Mạnh Trường" />
                            {errors.username && touched.username && <p className="error-text">{errors.username}</p>}
                        </Form.Group></div>
                    <div className="div2">
                        <div className="pick-gender">
                            <Form.Label>Giới tính</Form.Label>
                            <br />
                            <div className="row">
                                <div>
                                    <input type="radio" checked={genderRef === GENDER.M} name="gender" value={GENDER.M} onChange={(e) => { changeGenderRef(e.target.value as GENDER) }} id="gender-male" />
                                    <label htmlFor="gender-male">Nam</label>
                                </div>
                                <div>
                                    <input type="radio" checked={genderRef === GENDER.FM} name="gender" value={GENDER.FM} onChange={(e) => { changeGenderRef(e.target.value as GENDER) }} id="gender-male" />
                                    <label htmlFor="gender-male">Nữ</label>
                                </div>
                                <div>
                                    <input type="radio" checked={genderRef === GENDER.AN} name="gender" value={GENDER.AN} onChange={(e) => { changeGenderRef(e.target.value as GENDER) }} id="gender-male" />
                                    <label htmlFor="gender-male">Khác</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div3">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email <span className="error-text">*</span></Form.Label>
                            <Form.Control size='sm' isInvalid={!isValid && errors.email ? true : false} type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Nhập email của bạn tại đây" />
                            {errors.email && touched.email && <p className="error-text">{errors.email}</p>}
                        </Form.Group>
                    </div>
                    <div className="div4">
                        <Form.Group className="mb-3" controlId="formBasicPassword" >
                            <Form.Label>Mật khẩu <span className="error-text">*</span></Form.Label>
                            <Form.Control size='sm' isInvalid={!isValid && errors.password ? true : false} type="password" name="password" onBlur={handleBlur} onChange={handleChange} placeholder="Password" value={values.password} />
                            {errors.password && touched.password && <p className="error-text">{errors.password}</p>}
                        </Form.Group>
                    </div>
                    <div className="div5">  <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control size='sm' type="tel" name="phone" onBlur={handleBlur} onChange={handleChange} value={values.phone} />
                    </Form.Group></div>
                    <div className="div6">
                        <Form.Group className="mb-3" controlId="formBasicPassword" >
                            <Form.Label>Xác nhận mật khẩu <span className="error-text">*</span></Form.Label>
                            <Form.Control size='sm' isInvalid={!isValid && errors.confirmPassword ? true : false} type="password" name="confirmPassword" onBlur={handleBlur} onChange={handleChange} placeholder="Password" value={values.confirmPassword} />
                            {errors.confirmPassword && touched.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
                        </Form.Group>
                    </div>
                </div>
                <div className="btn-fnc">
                    {loading ?
                        <LoadingAction /> :
                        <Button type="submit" className="btn-login" >
                            Đăng ký
                        </Button>
                    }
                    <Button className="btn-switch-register" onClick={() => {
                        navigate('/auth/login', { replace: true })
                    }}>
                        Đăng nhập
                    </Button>
                </div>
            </Form>
            <Toaster onClose={() => {
                setShowToast(false)
                dispatch({ type: USER_CREATE_CLEAR })
            }}
                type={createUser?.success as boolean}
                show={showToast}
                position='top-center'
                message={`${createUser?.response?.message as string}${createUser?.success ? ' Login now.' : ''}`}
            />
        </div>
    )
}
