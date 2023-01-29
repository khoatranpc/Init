import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Steps } from 'antd';
import { useJumpTab } from 'utils/hooks';
import CarouselCustom, { ItemCarousel } from 'elements/Carousel';
import { Toaster } from 'elements/Toaster';
import slider from 'assets/imgs/slider_2.webp';
import total from 'assets/imgs/total.jpg';
import sexy from 'assets/imgs/sx.jpg';
import polkImg from 'assets/imgs/polk.webp';
import { modernDance, polk, reasonPhoenix } from './data';
import './style.scss';


const Home = () => {
  const listItem: ItemCarousel[] = [
    {
      img: <img src={slider} alt="sexy" />,
      key: 'SEXY'
    },
    {
      img: <img src={slider} alt="itrno" />,
      key: 'INTRO'
    },
  ];
  const [toast, setToast] = useState(false);
  const jump = useJumpTab();

  const jumpTab = (key: string) => {
    jump(key);
  }

  return (
    <div className="container-home">
      <div className="anchor-phoenix">
        <Anchor
          className='custom-anchor'
          targetOffset={150}
          items={[
            {
              key: 'INTRO',
              href: '#intro',
              title: 'Giới thiệu',
            },
            {
              key: 'SUBJECT',
              href: '#subject',
              title: 'Môn học',
            },
            {
              key: 'RESULT',
              href: '#result',
              title: 'Tổng kết khóa học',
            },
            {
              key: 'SIGN_UP',
              href: '#sign-up',
              title: 'Hướng dẫn đăng ký',
            },
            {
              key: 'CONTACT',
              href: '#contact',
              title: 'Liên hệ',
            },
          ]}
        />
      </div>
      <div className="container-main">
        <div className="slider">
          <CarouselCustom listItem={listItem} />
        </div>
        <div className="main">
          <div className="intro-phoenix" id="intro">
            <div className="left">
              <img src={total} alt="phoenix" />
            </div>
            <div className="right">
              <h3>Phoenix Dance Studio</h3>
              <p className="content">Phoenix Dance Studio được biết đến là một đơn vị dạy nhảy hiện đại và múa cổ trang, đương đại được thành lập vào tháng 3 năm 2020. Sau 4 tháng hoạt động với sự yêu mến của học viên tại Hà Nội, Phoenix Dance Studio đã tiếp tục phát triển cơ sở thứ 2 tại đây với mong muốn có thể đem đến sân chơi cho những bạn trẻ đam mê lĩnh vực này và mong muốn đem đến những lớp học thú vị để mọi người có thể cải thiện vóc dáng, sức khỏe của mình.</p>
              <h3>Tại sao là Phoenix Dance Studio</h3>
              <ul className="reason-phoenix">
                {reasonPhoenix.map((item) => {
                  return (
                    <li key={item.key}>{item.content}</li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="intro-subject-phoenix" id="subject">
            <div className="intro-service">
              <h3>Các bộ môn đào tạo tại Phoenix Dance Studio</h3>
              <p>
                Để cung cấp đầy đủ các dịch vụ với chất lượng tốt nhất, chúng tôi luôn cố gắng phát triển và hoàn thiện các dịch vụ, cơ sở. Bên cạnh đó giảng viên của chúng tôi luôn có tinh thần ham học hỏi, trau dồi kiến thức để đem đến cho học viên những lớp học thú vị.
                <br />
                Hiện tại&nbsp;
                <strong>Phoenix Dance Studio</strong>&nbsp;đang cung cấp các khóa học từ cơ bản đến nâng cao và các dịch vụ sau:
              </p>
            </div>
            <div className="modern-dance subject">
              <h3>Dạy nhảy hiện đại:</h3>
              <ul>
                {modernDance.map((item) => {
                  return (
                    <li key={item.nameSubject}><strong>{item.nameSubject}: </strong>{item.intro}</li>
                  )
                })}
              </ul>
              <img src={sexy} alt="phoenix" className="sexy-image-intro" />
            </div>
            <div className="polk subject">
              <h3>Dạy múa:</h3>
              <ul>
                {polk.map((item) => {
                  return (
                    <li key={item.nameSubject}><strong>{item.nameSubject}: </strong>{item.intro}</li>
                  )
                })}
              </ul>
              <img src={polkImg} alt="phoenix" className="sexy-image-intro" />
            </div>
          </div>
          <div className="intro-result-course subject" id="result">
            <h3>Tổng kết khóa học</h3>
            <p>Với các lớp học chất lượng từ cơ sở vật chất đến giáo viên, nhân viên chúng tôi có thể tự tin mình có thể giúp bạn giải tỏa, thư giãn về đầu óc, tăng cường sức khỏe dẻo dai và yêu thích hơn bộ môn mình đang theo học.</p>
            <strong><i>Phoenix Dance Studio hy vọng rằng những thành phẩm cuối khóa học của học viên chúng tôi sẽ giúp bạn có thêm động lực, mong muốn tham gia lớp học. Bên cạnh đó những thành phẩm này có thể chứng minh được năng lực, chất lượng của Phoenix Dance Studio.</i></strong>
            <div className="embedded-video">
              <iframe width="800" height="450" src="https://www.youtube.com/embed/WFCHTihpuVY" title="[NHẢY DÂN TỘC CỰC CHẤT] ĐỂ MỊ NÓI CHO MÀ NGHE - HOÀNG THUỲ LINH choreography by PHOENIX Dance Studio" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
          <div className="guide-join-phoenix subject" id="sign-up">
            <h3>Các bước để trở thành học viên tại Phoenix</h3>
            <Steps
              size="small"
              className="step-to-join"
              direction="vertical"
              current={3}
              items={[
                {
                  title: <><Link to={'/auth/register'}>Đăng ký tài khoản tại đây.</Link> <small>(Nếu chưa có)</small></>,
                  status: 'process'
                },
                {
                  title: <>
                    Lựa chọn
                    <u
                      className="color-blue-base"
                      onClick={() => {
                        jumpTab('TEACHER')
                      }}
                    >
                      &nbsp;Giáo viên
                    </u>,
                    <u className="color-blue-base"
                      onClick={() => {
                        jumpTab('COURSES')
                      }}
                    >
                      &nbsp;Lớp học
                    </u> mà bạn mong muốn
                  </>,
                  status: 'process'
                },
                {
                  title: <strong>Tham gia ngay cùng Phoenix Dance Studio</strong>,
                  status: 'process'
                },
              ]}
            />
            <Toaster position='bottom-end' show={toast} onClose={() => { setToast(false) }} type={false} message={'Bạn cần đăng nhập trước!'} />
          </div>
        </div>
      </div>
    </div >
  )
}
export default Home;