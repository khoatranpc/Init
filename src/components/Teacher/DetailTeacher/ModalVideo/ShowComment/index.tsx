import React from 'react';
import { Avatar, Button, Form, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { Obj } from 'global/interface';
import { dataComment } from './fake.data';
import './style.scss';

const ShowComment = () => {
  const handleSubmit = (values: Obj) => {
    console.log(values)
  }
  return (
    <div className="container-comment">
      <div className="container-comment-status">
        {dataComment.map((item) => {
          return (
            <div className="comment-item" key={item.time}>
              <Space direction="vertical" size={16}>
                <Space wrap size={16}>
                  <Avatar size="large" icon={<UserOutlined />} src={item.img} />
                </Space>
              </Space>
              <div className="content-author">
                <b className="author">{item.author}</b>
                <p className="conent-comment">{item.content}</p>
              </div>
            </div>
          )
        })}

      </div>
      <div className="post-comment">
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} src={''} />
          </Space>
        </Space>
        <Form
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          autoComplete="off"
          className="my-form"
        >
          <Form.Item
            name="content"
          >
            <TextArea rows={2} placeholder="Write your comments here..." style={{ height: '100%', resize: 'none' }} className="cmts" name='content' required />
          </Form.Item>
          <div className="btn-post">
            <Button htmlType='submit'>Bình luận</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default ShowComment;