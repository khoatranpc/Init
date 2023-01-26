import React, { useEffect, useState, useRef } from 'react'
import DataGrid from 'elements/DataGrid';
import { GridApi } from 'global/interface';
import { ColDef, ColGroupDef } from 'ag-grid-community';
const CellRender = () => {
  return <div>khoa đẹp trai</div>
}
export const Home = () => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 }
  ]);
  const gridRef = useRef<GridApi>(null);

  const [columnDefs] = useState<ColDef[] | ColGroupDef[]>([
    {
      field: 'make',
      headerClass: 'text-left',
      sortable: true,
      cellRenderer: CellRender
    },
    { field: 'model' },
    { field: 'price' }
  ])

  const onGridReady = () => {
    gridRef.current?.api.setRowData([]);
  }

  return (
    <div style={{ height: 100 }}>Header is here
      <button>Click</button>
      <DataGrid ref={gridRef} columnDefs={columnDefs} onGridReady={onGridReady} />
    </div>
  )
}
