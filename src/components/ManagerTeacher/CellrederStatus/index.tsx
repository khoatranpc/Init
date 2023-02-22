import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { STATUS_USER } from 'global/enum';
import './style.scss';

interface Props extends ICellRendererParams { }
export const CellrenderStatus = (props: Props) => {
    return (
        <div className="stt-teacher">
            <button className={`circle ${props.data.stt === STATUS_USER.ACTIVATE ? 'green' : 'red'}`}></button>
            {props.data.stt === STATUS_USER.ACTIVATE ? 'Activate' : 'De-activate'}
        </div>
    )
}
