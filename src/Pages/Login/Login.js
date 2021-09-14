
import React, { Fragment, useContext, useState } from 'react'
import { Form, Icon, Input, Button, Layout } from 'antd';
import './login.css'
import "antd/dist/antd.css";

import { AuthContext } from './auth-context';


const { Footer } = Layout;
let year = new Date().getFullYear();
const Login = (props) => {
    const authContext = useContext(AuthContext);
    const { getFieldDecorator } = props.form;
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                authContext.login();
            }
            setIconLoading(false);
        });
    };
    const enterIconLoading = () => {
        setIconLoading(true);
    };
    // const [loading, setLoading] = useState(false);
    const [iconLoading, setIconLoading] = useState(false);
    return (
        <Fragment>
            <div className="form"
            >
                {/* <div className="logo">
                    <img alt="logo" src={mainLogo} />
                </div> */}
                {/* <h2 className="login-title">Escalation</h2> */}
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            icon="poweroff"
                            loading={iconLoading}
                            onClick={enterIconLoading}
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div >
            <Footer className="footer_app">
                <span className="footer_span">Test CRUD © {year}</span>
            </Footer>
        </Fragment>
    );
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm;
