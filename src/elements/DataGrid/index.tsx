import React, { forwardRef, useState, useEffect, useImperativeHandle, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { CellClickedEvent, ColDef, ColGroupDef, GetRowNodeIdFunc, PaginationChangedEvent } from 'ag-grid-community';
import { NoData } from './NoData';
import './style.scss';

interface Props {
    rowData?: Record<string, unknown>[];
    columnDefs?: Array<ColDef | ColGroupDef>;
    headerHeight?: number;
    rowHeight?: number;
    pagination?: boolean;
    paginationPageSize?: number;
    sortable?: boolean;
    onPaginationChanged?: (event: PaginationChangedEvent) => void;
    onCellClicked?: (event: CellClickedEvent) => void;
    getRowNodeId?: GetRowNodeIdFunc;
    onGridReady?: () => void;
}

const DataGrid = forwardRef((props: Props, ref: ((instance: AgGridReact) => void) | React.MutableRefObject<AgGridReact | null> | null) => {
    const [initGrid, setInitGrid] = useState<boolean>(false);
    const gridRef = useRef<AgGridReact>(null);
    const onGridReady = () => {
        if (props.onGridReady) {
            props.onGridReady()
        }
        setInitGrid(true);
        sizeColumnsToFit();
    }
    useEffect(() => {

    }, [])
    const sizeColumnsToFit = () => {
        gridRef.current?.api.sizeColumnsToFit();
    }
    useImperativeHandle(ref, () => (gridRef.current as AgGridReact), [initGrid])
    return (
        <div className="data-grid ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
            <AgGridReact
                ref={gridRef}
                suppressMovableColumns
                pagination={props.pagination}
                defaultColDef={{
                    sortable: props.sortable,
                    resizable: false,
                }}
                onCellClicked={props.onCellClicked}
                getRowNodeId={props.getRowNodeId}
                paginationPageSize={props.paginationPageSize}
                onPaginationChanged={props.onPaginationChanged}
                noRowsOverlayComponentFramework={NoData}
                onGridReady={onGridReady}
                onViewportChanged={sizeColumnsToFit}
                onGridSizeChanged={sizeColumnsToFit}
                headerHeight={props.headerHeight}
                rowHeight={props.rowHeight}
                rowData={props.rowData}
                columnDefs={props.columnDefs}>

            </AgGridReact>
        </div>
    )
})
export default DataGrid