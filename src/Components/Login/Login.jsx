import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AUTH_ENDPOINT, REDIRECT_URI, CLIENT_ID, RESPONSE_TYPE, isLive } from '../../environment';

const Login = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token);
        }
        if (token != null)
            navigate('/panel/home');

    }, []);

    function renderDescription() {
        return <span>
            you are already logged in to your Spotify account in browser <a href="https://docs.google.com/document/d/1ne0broswBabbtVa9KrCy80smdTA_Z5wPktJeSEdIfNg/edit?usp=sharing" target={'_blank'} rel="noreferrer">read docs</a>
        </span>
    }

    return (
        <div className='core-container'>
            <Alert
                type='warning'
                message='Please make sure:'
                description={renderDescription()}
            /><br />
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
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
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" block onClick={() => {
                        window.open(`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`, "_self");
                    }}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div >
    );
};

export default Login;