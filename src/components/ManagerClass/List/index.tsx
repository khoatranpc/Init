import React, { useState, useRef, useEffect } from 'react';
import { ColDef, ColGroupDef, RowClickedEvent, ValueFormatterParams } from 'ag-grid-community';
import DataGrid from 'elements/DataGrid';
import { GridApi } from 'global/interface';
import { formatDateToString } from 'utils';
import DetailClass from './DetailClass';
import FilterByTypeInput from 'elements/DataGrid/FilterByTypeInput';
import { fakeData } from './data';
import './style.scss';

const List = () => {
    const [columnDefs] = useState<Array<ColDef | ColGroupDef>>([
        {
            field: 'code',
            headerName: 'Mã lớp',
            headerClass: 'header text-left',
            cellClass: 'text-left',
            filter: FilterByTypeInput
        },
        {
            field: 'office',
            headerName: 'Cơ sở',
            headerClass: 'header text-left',
            cellClass: 'text-left',
            filter: FilterByTypeInput
        },
        {
            field: 'name',
            headerName: 'Lớp học',
            headerClass: 'header text-left',
            cellClass: 'text-left',
            filter: FilterByTypeInput
        },
        {
            field: 'teacher',
            headerName: 'Giáo viên',
            headerClass: 'header text-left',
            cellClass: 'text-left',
            filter: FilterByTypeInput
        },
        {
            field: 'totalStudent',
            headerName: 'Học viên',
            headerClass: 'header text-center',
            cellClass: 'text-center bold',
            cellClassRules: {
                green: params => params.value < (Math.floor(params.data.maxStudent / 2)),
                red: params => params.data.maxStudent === params.value,
                yellow: params => params.data.maxStudent > params.value && params.value >= (Math.floor(params.data.maxStudent / 2)),
            },
            valueFormatter: (params: ValueFormatterParams) => {
                return `${params.value}/${params.data.maxStudent}`;
            }
        },
        {
            headerName: 'Thời gian',
            headerClass: 'header text-center',
            children: [
                {
                    field: 'begin',
                    headerClass: 'header-child text-center',
                    headerName: 'Khai giảng',
                    cellClass: 'text-center',
                    valueFormatter: (params: ValueFormatterParams) => {
                        return `${formatDateToString(params.value as Date)}`
                    }
                },
                {
                    field: 'end',
                    headerClass: 'header-child text-center',
                    headerName: 'Kết thúc',
                    cellClass: 'text-center',
                    valueFormatter: (params: ValueFormatterParams) => {
                        return `${formatDateToString(params.value as Date)}`
                    }
                },
            ]
        },
        {
            field: 'schedule',
            headerName: 'Lịch học',
            headerClass: 'header text-left',
            cellClass: 'text-left'
        },
        {
            field: 'status',
            headerName: 'Trạng thái',
            headerClass: 'header text-center',
            cellClass: 'text-center',
            valueFormatter: (params: ValueFormatterParams) => {
                return `${params.value ? 'Hoạt động' : 'Kết thúc'}`
            }
        }
    ])
    const [rowData, setRowData] = useState<Record<string, unknown>[]>([]);
    const [idCrrDetailClass, setIdCrrDetailClass] = useState<string>('');
    const gridRef = useRef<GridApi>(null);
    const onGridReady = () => {
        if(rowData.length !== 0){
            gridRef.current?.api?.setRowData(rowData);
        }else{
            setRowData(fakeData);
        }
    }
    useEffect(() => {
        setTimeout(() => {
            gridRef.current?.api?.setRowData(rowData);
        }, 2000)
    }, [rowData])
    const onRowClicked = (e: RowClickedEvent) => {
        setIdCrrDetailClass(e.data.code as string);
    }
    return (
        <div className="container-list-class">
            {!idCrrDetailClass ?
                <DataGrid ref={gridRef} onRowClicked={onRowClicked} columnDefs={columnDefs} onGridReady={onGridReady} />
                :
                <DetailClass idClass={idCrrDetailClass} backList={() => { setIdCrrDetailClass('') }} />
            }

        </div>
    )
}

export default List