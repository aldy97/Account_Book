import React from 'react';
import Header from '../../commons/header';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import theme from '../../static/theme/index';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const StyledLogIn = styled.div`
  width: ${theme.$width};
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding: 30px;
  color: ${theme.$blue};
`;

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleSubmitClick = () => {
    window.location.href = '/summary';
  };

  return (
    <div>
      <Header />
      <StyledLogIn>
        <Form
          {...layout}
          name='basic'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              type='primary'
              htmlType='submit'
              onClick={handleSubmitClick}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </StyledLogIn>
    </div>
  );
};

export default Login;
