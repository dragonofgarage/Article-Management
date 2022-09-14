import { Card, Button, Checkbox, Form, Input, message  } from 'antd';
import { useStore } from '@/store';
import { useNavigate } from 'react-router-dom';

import './index.scss'

// Get the object of direct
const Login = () => {
 
  const { loginStore } = useStore()
  const navigate = useNavigate()

  async function onFinish(values) {
    
    await loginStore.getToken({
      mobile: values.mobile,
      code: values.code 
    })
    //Jump into homepage
    navigate('/', { replace: true })
    message.success('Login')
  };

  return(
    <div className="login">
      <Card className="login-container">
        <p className="login-logo">Article Management System</p>

        <Form 
          validateTrigger={['onChange']}
          onFinish={onFinish}
          initialValues = {{
            mobile: 18888888888,
            code: Number.parseInt(246810)
          }}
          >
          <Form.Item
            name="mobile"
            rules={[
              {
                pattern: /^1[3-9]\d{9}$/,
                message: 'The format you input is not right.',
              },
              { 
                required: true, 
                message: 'Please input your phone number!',
              }
            ]}
          >
            <Input size="large" placeholder="Input your phone number"/>
          </Form.Item>

          <Form.Item
            name="code"
            rules={[
              { required: true, message: 'Please input your indetify code' }
            ]}
          >
            <Input size="large" placeholder="Please input your indetify code" maxLength={6} />
          </Form.Item>

          <Form.Item>
            <Checkbox className="login-checkbox-label">Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button className="login-button" type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>

      </Card>
    </div>
  )
}

export default Login;