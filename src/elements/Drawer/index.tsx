import React from 'react';
import { Drawer } from 'antd';
interface Props {
    children?: React.ReactElement;
    isOpen: boolean;
    onClose: () => void;
    getContainer?: boolean;
    title?: string;
    placement?: 'bottom' | 'left' | 'right' | 'top';
    width?: number;
}
const DrawerCustom = (props: Props) => {
    return (
        <>
            <Drawer
                title={props.title}
                placement={props.placement}
                width={props.width ?? 500}
                onClose={props.onClose}
                open={props.isOpen}
                getContainer={false}
            >
                {props.children}
            </Drawer>
        </>
    )
}

export default DrawerCustom;