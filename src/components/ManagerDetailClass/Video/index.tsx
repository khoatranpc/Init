import React, { useState, useEffect, useRef } from 'react';
import { ColDef, ColGroupDef, ValueGetterParams } from 'ag-grid-community';
import { GridApi } from 'global/interface';
import { formatDateToString } from 'utils';
import DataGrid from 'elements/DataGrid';
import { CellrenderAction } from './CellrenderAction';
import { fakeDataVideo } from './data';
import './style.scss';

const VideoClass = () => {
    const gridRef = useRef<GridApi>(null);
    const [columnDefs] = useState<Array<ColDef | ColGroupDef>>([
        {
            field: 'lesson',
            headerName: 'Buổi học',
            headerClass: 'header text-left',
            cellClass: 'text-left',
            maxWidth: 90,
            // minWidth: 95
        },
        {
            headerName: 'Thời gian',
            headerClass: 'header text-left',
            cellClass: 'text-left',
            valueGetter: (params: ValueGetterParams) => {
                return `${params.data.at} - ${formatDateToString(params.data.time as Date, 'dd/MM')}`
            },
            maxWidth: 150
        },
        {
            field: 'content',
            headerName: 'Nội dung',
            headerClass: 'header text-left',
            cellClass: 'text-left'
        },
        {
            headerName: 'Hành động',
            headerClass: 'header text-center',
            cellClass: 'text-center',
            cellRenderer: CellrenderAction,
            maxWidth: 100
        }
    ])
    const [rowData, setRowData] = useState<Record<string, unknown>[] | null>(null);
    const onGridReady = () => {
        setRowData(fakeDataVideo)
    }
    useEffect(() => {
        if (rowData) {
            // setTimeout(() => {
            gridRef.current?.api?.setRowData(rowData);
            // }, 2000);
        }
    }, [rowData])

    return (
        <div className="container-video-learn">
            <DataGrid ref={gridRef} onGridReady={onGridReady} columnDefs={columnDefs} />
        </div>
    )
}

export default VideoClass;