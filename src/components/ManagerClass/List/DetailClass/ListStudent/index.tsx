import React, { useEffect, useRef, useState } from 'react';
import { ColDef, ColGroupDef, ValueFormatterParams } from 'ag-grid-community';
import { GridApi } from 'global/interface';
import DataGrid from 'elements/DataGrid';
import FilterByTypeInput from 'elements/DataGrid/FilterByTypeInput';
import { fakeData } from './data';
import './style.scss';

const ListStudent = () => {
    const gridRef = useRef<GridApi>(null);
    const [columnDefs] = useState<Array<ColDef | ColGroupDef>>([
        {
            field: 'username',
            headerClass: 'header text-left',
            headerName: 'Học viên',
            cellClass: 'text-left',
            filter: FilterByTypeInput
        },
        {
            field: 'phone',
            headerClass: 'header text-left',
            headerName: 'SĐT',
            cellClass: 'text-left',
            filter: FilterByTypeInput
        },
        {
            field: 'pay',
            headerClass: 'header text-center',
            headerName: 'Thanh toán',
            cellClass: 'text-center',
            valueFormatter: (params: ValueFormatterParams) => {
                return `${params.value ? 'Đã hoành thành' : 'Chưa hoàn thành'}`
            }
        },
    ]);
    const [rowData, setRowData] = useState<Record<string, unknown>[]>([]);
    const onGridReady = () => {
        setRowData(fakeData);
    }
    useEffect(() => {
        gridRef.current?.api?.setRowData(rowData);
    }, [rowData])
    return (
        <div className="list-student-enroll-class">
            <DataGrid ref={gridRef} columnDefs={columnDefs} headerHeight={28} onGridReady={onGridReady} rowHeight={28} />
        </div>
    )
}

export default ListStudent