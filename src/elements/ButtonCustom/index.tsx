import React from 'react';
import LoadingAction from 'components/LoadingAction';
import Button from 'react-bootstrap/esm/Button';

interface Props {
    children?: React.ReactElement;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    text?: string;
    onClick?: () => void;
}
export const ButtonCustom = (props: Props) => {
    return (
        <>
            {props.loading ? <LoadingAction /> :
                <Button className={`${props.className ? props.className : ''} button-custome`} type={props.type ? props.type : 'button'} onClick={() => {
                    props.onClick?.();
                }}>
                    {props.text}
                </Button>
            }
        </>
    )
}
