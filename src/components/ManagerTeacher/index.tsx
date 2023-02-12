import React, { useState, useEffect } from 'react';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { useSelector } from 'react-redux';
import { useViewDetailUser } from 'utils/hooks';
import { State } from 'redux-saga/reducer';
import DetailTeacher from './DetailTeacher';
import { CellrenderImg } from './CellrenderImg';
import { CellrenderStatus } from './CellrederStatus';
import DataGrid from 'elements/DataGrid';
import ByTypeEqual from './CustomFilter/ByTypeInput';
import { ReactComponent as IconPlus } from 'assets/svgs/icon-plus.svg';
import { data } from './fakedata';
import './style.scss';


const ManagerTeacher = () => {
  const viewDetailUser = useViewDetailUser();
  const crrDetailUser = useSelector((state: State) => state.handleViewDetailUser);
  const [columnDefs] = useState<Array<ColDef | ColGroupDef>>([
    {
      field: 'avatar',
      headerName: '',
      headerClass: 'header text-center',
      cellClass: 'text-center',
      cellRenderer: CellrenderImg,
      maxWidth: 100,
      onCellClicked(event) {
        viewDetailUser(event.data._id as string)
      },
    },
    {
      field: 'username',
      headerName: 'Giáo viên',
      headerClass: 'header text-left',
      cellClass: 'text-left',
      filter: ByTypeEqual
    },
    {
      field: 'phone',
      headerName: 'SĐT',
      headerClass: 'header text-left',
      cellClass: 'text-left',
      filter: ByTypeEqual
    },
    {
      field: 'email',
      headerName: 'Mail',
      headerClass: 'header text-left',
      cellClass: 'text-left',
      filter: ByTypeEqual
    },
    {
      field: 'major',
      headerName: 'Bộ môn',
      headerClass: 'header text-left',
      cellClass: 'text-left',
      filter: ByTypeEqual
    },
    {
      field: '',
      headerName: 'Lớp học',
      headerClass: 'header text-center',
      children: [
        {
          field: 'classRuning',
          headerName: 'Đang chạy',
          headerClass: 'header-child text-center',
          cellClass: 'text-center green bold',
          sortable: true
        },
        {
          field: 'classEnding',
          headerName: 'Kết thúc',
          headerClass: 'header-child text-center',
          cellClass: 'text-center red bold',
          sortable: true
        },
      ]
    },
    {
      field: 'rank',
      headerName: 'Thứ hạng',
      headerClass: 'header text-center',
      cellClass: 'text-center',
      sortable: true
    },
    {
      field: 'stt',
      headerName: 'Trạng thái',
      headerClass: 'header text-center',
      cellClass: 'text-left',
      cellRenderer: CellrenderStatus
    },
  ]);
  const [rowData] = useState<Record<string, unknown>[]>(data);
  useEffect(() => {
    return () => {
      viewDetailUser('', true)
    }
  }, [])

  return (
    <div className="container-manager-teacher">
      {
        !crrDetailUser ? <div className="content-main">
          <div className="top-feat">
            <div className="add-teacher">
              <IconPlus />
              Thêm giáo viên
            </div>
          </div>
          <DataGrid columnDefs={columnDefs} rowData={rowData} />
        </div> : <DetailTeacher />
      }
    </div >
  )
}

export default ManagerTeacher;