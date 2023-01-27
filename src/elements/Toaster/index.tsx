import React from 'react';
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer';
import logo from '../../assets/imgs/logo.png';
import './style.scss';

interface Props {
    children?: React.ReactElement;
    position?:
    'top-start' |
    'top-center' |
    'top-end' |
    'middle-start' |
    'middle-center' |
    'middle-end' |
    'bottom-start' |
    'bottom-center' |
    'bottom-end';
    message: string;
    type: boolean;
    show: boolean;
    onClose: () => void;
    html?: React.ReactElement
}
export const Toaster = (props: Props) => {
    return (
        <ToastContainer position={props.position ? props.position : 'top-end'} className={props.type ? 'success' : 'error'} >
            <Toast className="toast-notifi" animation onClose={() => props.onClose()} show={props.show} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src={logo}
                        className="logo-notification"
                        alt=""
                    />
                    <strong className="me-auto">Phoenix</strong>
                </Toast.Header>
                <p className="message">{props.message}</p>
                {props.html}
            </Toast>
        </ToastContainer >
    )
}
