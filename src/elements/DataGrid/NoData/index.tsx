import React from 'react'
import logo from 'assets/imgs/logo.png';
import './style.scss';

export const NoData = () => {
  return (
    <div className="over-lay-no-data">
      <img src={logo} alt="" />
      <p>Không có dữ liệu</p>
    </div>
  )
}
