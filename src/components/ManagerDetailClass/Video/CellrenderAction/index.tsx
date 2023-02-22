import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { ReactComponent as IconView } from 'assets/svgs/icon-view.svg';
import { ReactComponent as IconEdit } from 'assets/svgs/icon-edit.svg';
import './style.scss';

interface Props extends ICellRendererParams { }

export const CellrenderAction = (props: Props) => {
    return (
        <div className="cell-render-action-video">
            <IconView className="view-video" />
            <IconEdit className="edit-video" />
        </div>
    )
}
