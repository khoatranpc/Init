import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { State } from '../../redux-saga/reducer';
import { uuid } from '../../utils';
import { queryHeaderAction } from './action';
import DataGrid from '../../elements/DataGrid';
import { GridApi } from '../../global/interface';
import { ColDef, ColGroupDef } from 'ag-grid-community';
const CellRender = () => {
  return <div>khoa đẹp trai</div>
}
export const Home = () => {
  const state = useSelector((state: State) => state.headerReducer);
  const dispatch = useDispatch();
  const [componentId] = useState(uuid());
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
  const query = () => {
    const payload = {
      reqParams: ['1', 'test'],
      params: {
        postId: 1,
      },
      body: {
        username: 'khoa'
      }
    };
    dispatch(queryHeaderAction(payload, componentId));
  }
  useEffect(() => {
    query();
  }, [])
  const onGridReady = () => {
    gridRef.current?.api.setRowData([]);
  }

  return (
    <div style={{ height: 100 }}>Header is here
      <button onClick={query}>Click</button>
      <DataGrid ref={gridRef} columnDefs={columnDefs} onGridReady={onGridReady} />
    </div>
  )
}
