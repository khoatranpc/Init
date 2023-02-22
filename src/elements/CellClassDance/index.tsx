import React, { useState, useEffect } from 'react';
import logo from 'assets/imgs/logo.webp';
import './style.scss';

interface Props {
  idCourse?: string;
  handleClickCell?: () => void;
}
const CellClassDance = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000)
    }
  }, [loading])
  return (
    <div className="item-class" onClick={() => { props.handleClickCell?.() }}>
      <div className="bounda">
        <div className="image">
          <img src={logo} alt="" />
        </div>
        <div className="information-class">
          <h3 className="class-name">Sexy dance SX31</h3>
          <h1 className="teacher-name">GV: Nga Rubi</h1>
          <div className="time">
            <div className="start-end">
              <div>Thời gian: <br />
                <p className="text-center">
                  <strong>09/02/2023-01/03/2023</strong>
                </p>
              </div>
            </div>
            <div>Giờ học: <br />
              <p className="text-center">
                <strong >11h-12h30, T3 hàng tuần</strong>
              </p>
            </div>
          </div>
          <div className="size-class">
            Sĩ số:&nbsp;
            <p className="text-center">
              <span className="green">
                5/20
              </span>
            </p>
          </div>
          <strong className="text-center">Hạn đăng ký:</strong>
          <p className="text-center"><strong>12h00, 10/02/2023</strong></p>
        </div>
      </div>
    </div>
  )
}

export default CellClassDance;