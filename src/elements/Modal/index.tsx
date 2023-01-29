import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './style.scss';

interface Props {
    children?: React.ReactElement;
    isOpen?: boolean;
    onCancel?: () => void;
    onOk?: () => void;
    className?: string;
    title?: string;
}
const ModalCustom = (props: Props) => {
    return (
        <div className="custom-modal">
            <Modal
                show={props.isOpen}
                size="lg"
                centered
            >
                <Modal.Header closeButton onClick={props.onCancel}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
            </Modal>
        </div>
    );
};
export default ModalCustom;