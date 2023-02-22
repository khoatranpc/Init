import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { ReactComponent as IconView } from 'assets/svgs/icon-view.svg';
import { ReactComponent as IconEdit } from 'assets/svgs/icon-edit.svg';
import { Modal } from '..';
import './style.scss';

interface Props extends ICellRendererParams {
    handleModal(modal: Modal): void;
}

export const CellrenderAction = (props: Props) => {
    return (
        <div className="cell-render-action-video">
            <IconView className="view-video" onClick={() => { props.handleModal({ show: true, modal: 'VIDEO', crrId: props.data.content }) }} />
            <IconEdit className="edit-video" onClick={() => { props.handleModal({ show: true, modal: 'EDIT', crrId: props.data.content }) }} />
        </div>
    )
}
